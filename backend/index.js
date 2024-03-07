const port = 4001;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://Sanketh:170404@cluster0.hrdp4wn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({ storage: storage })

// creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
});

// Schema for creating products

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
    shortdesc: {
        type: String,
        required: true,
    },
    briefdesc: {
        type: String,
        required: true,
    }
});

// Schema for creating orders

const Order = mongoose.model('Order', {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
    total: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Middleware to fetch user
const fetchuser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, 'secret_ecom');
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
};


app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        price: req.body.price,
        weight: req.body.weight,
        shortdesc: req.body.shortdesc,
        briefdesc: req.body.briefdesc
    });

    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
});

// creating api for deleting products

app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
});

//create Api for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
});

// Schema creating for user model

const Users = mongoose.model('User', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

//Creating endpoint for registering the user

app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "existing user found with same email address" });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone:req.body.phone,
        address:req.body.address,
        cartData: cart
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');

    res.json({ success: true, token });
});

//creating endpoint for user login

app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
    
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token,data:user });
        }
        else {
            res.json({ success: false, errors: "wrong Password" });
        }
    }
    else {
        res.json({ success: false, errors: "Wrong Email Id" });
    }
});

app.get("/allproducts", async (req, res) => {
    let products = await Product.find({});
    console.log("All Products");
    res.send(products);
});
//creating endpoint for popular products

app.get('/popular', async (req, res) => {
    let products = await Product.find({ category: "Fertilizers" });
    let popular = products.slice(0, 3);
    console.log("popular fetched");
    res.send(popular);
});


//creating endpoint for adding products in cart
app.post('/addtocart', fetchuser, async (req, res) => {
    console.log("Add Cart");
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("1")
})

//creating endpoint for removing products in cart

app.post('/removefromcart', fetchuser, async (req, res) => {
    console.log("Remove Cart", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("2")
})

//creating endpoint to get cart data retrive
app.post('/getcart', fetchuser, async (req, res) => {
    console.log("getcart");
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
})

app.post('/checkout', fetchuser, async (req, res) => {
    try {
        const user = await Users.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const { cartData } = user;

        const items = [];
        let total = 0;

        // Filter out keys that are not valid ObjectId strings
        const validItemIds = Object.keys(cartData).filter(mongoose.Types.ObjectId.isValid);

        // Iterate through validItemIds to calculate total and create items array
        for (const itemId of validItemIds) {
            const product = await Product.findById(itemId);
            if (!product) {
                console.error(`Product not found for ID: ${itemId}`);
                continue;
            }

            items.push({
                productId: product._id,
                quantity: cartData[itemId],
                price: product.price
            });
            total += product.price * cartData[itemId];
        }

        if (items.length === 0) {
            return res.status(400).json({ success: false, message: 'No valid items found in the cart' });
        }

        // Create and save the order
        const order = new Order({
            userId: req.user.id,
            items: items,
            total: total
        });
        await order.save();

        // Clear the cart after placing the order
        user.cartData = {};
        await user.save();

        res.json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});



app.listen(port, () => {
    console.log("Server Running on Port " + port);
});

import React, { createContext, useEffect, useState } from "react";

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const HomeContextProvider = (props) => {
    const [all_product, setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4001/allproducts')
            .then((response) => response.json())
            .then((data) => setAll_product(data));

        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch('http://localhost:4001/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: '',
            })
                .then((resp) => resp.json())
                .then((data) => setCartItems(data));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        const authToken = localStorage.getItem("auth-token");
        if (authToken) {
            fetch('http://localhost:4001/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((resp) => resp.json())
                .then((data) => { console.log(data) })
                .catch((error) => { console.error('Error adding to cart:', error); });
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            fetch('http://localhost:4001/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((resp) => resp.json())
                .then((data) => { console.log(data) })
                .catch((error) => { console.error('Error removing from cart:', error); });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount = totalAmount + itemInfo.price * cartItems[item];
                }

            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;

import React, { useContext } from 'react';
import './CartItems.css';
import { HomeContext } from '../../Context/HomeContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(HomeContext);

    const handleCheckout = async () => {
        try {
            const response = await fetch('http://localhost:4001/checkout', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token')
                }
            });
            if (!response.ok) {
                throw new Error('Server Error: ' + response.status);
            }
            const data = await response.json();
            if (data.success) {
                console.log('Order placed successfully');
            } else {
                console.error('Order placement failed:', data.errors);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt='' className='cartitems-product-icon' />
                                <p>{e.name}</p>
                                <p>Rs.{e.price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Rs.{e.price * cartItems[e.id]}</p>
                                <img
                                    className='cartitems-remove-icon'
                                    src={remove_icon}
                                    onClick={() => {
                                        removeFromCart(e.id);
                                    }}
                                    alt=''
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>Rs.{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>Rs.{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;

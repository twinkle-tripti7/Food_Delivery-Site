import React, { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for routing
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

    // Function to calculate subtotal
    const calculateSubtotal = () => {
        return food_list.reduce((total, item) => {
            return total + (cartItems[item._id] || 0) * item.price;
        }, 0);
    };

    const deliveryFee = 2; // Replace with appropriate value if needed
    const subtotal = calculateSubtotal();
    const total = subtotal + deliveryFee;

    return (
        <div className='cart'>
            {Object.keys(cartItems).length > 0 ? (
                <div className='cart-items'>
                    <div className='cart-items-title'>
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {food_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <React.Fragment key={item._id}>
                                    <div className='cart-items-item'>
                                        <img src={item.image} alt={item.name} />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                    </div>
                                    <hr />
                                </React.Fragment>
                            );
                        }
                        return null;
                    })}
                </div>
            ) : (
                <p>Your cart is empty!</p>
            )}
            <div className='cart-total'>
                <h2>Cart Total</h2>
                <div className='cart-total-details'>
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className='cart-total-details'>
                    <p>Delivery Fee</p>
                    <p>${deliveryFee.toFixed(2)}</p>
                </div>
                <div className='cart-total-details'>
                    <b>Total</b>
                    <b>${total.toFixed(2)}</b>
                </div>

                {Object.keys(cartItems).length > 0 && (
                    <Link to="/place-order">
                        <button className='proceed-to-payment'>Proceed to Delivery</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Cart;

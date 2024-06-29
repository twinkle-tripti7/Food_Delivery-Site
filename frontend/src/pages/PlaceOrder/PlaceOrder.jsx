import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {


    const { cartItems, food_list } = useContext(StoreContext);

    const calculateSubtotal = () => {
        return food_list.reduce((total, item) => {
            return total + (cartItems[item._id] || 0) * item.price;
        }, 0);
    };

    const deliveryFee = 2; // Replace with appropriate value if needed
    const subtotal = calculateSubtotal();
    const total = subtotal + deliveryFee;

    return (
        <div className='place-order'>
            <div className='place-order-left'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input type='text' placeholder='First name' required />
                    <input type='text' placeholder='Last Name' required />
                </div>
                <input type='email' placeholder='Email address' required />
                <input type='text' placeholder='Street' required />
                <div className='multi-fields'>
                    <input type='text' placeholder='City' required />
                    <input type='text' placeholder='State' required />
                </div>
                <div className='multi-fields'>
                    <input type='text' placeholder='Zip code' required />
                    <input type='text' placeholder='Country' required />
                </div>
                <input type='number' placeholder='Phone' required />
            </div>

            <div className='place-order-right'>
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
                </div>
                <button>Proceed to Payment</button> {/* To be implemented for payment processing */}
            </div>
        </div>
    );
};

export default PlaceOrder;

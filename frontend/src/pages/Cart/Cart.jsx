import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext); // Add url from context

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.filter(item => cartItems[item._id] > 0).map((item) => (
          <div key={item._id} className="cart-items-title cart-items-item">
            <img src={`${url}/images/${item.image}`} alt={item.name} className='food-item-image' />
            <p>{item.name}</p>
            <p>Rs. {item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>Rs. {item.price * cartItems[item._id]}</p>
            <p
              onClick={() => removeFromCart(item._id)}
              style={{ cursor: 'pointer' }}
            >
              X
            </p>
          </div>
        ))}
        {Object.keys(cartItems).length === 0 && (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs. {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs. {getTotalCartAmount() === 0 ? 0 : 250}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>Rs. {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 250}</b>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

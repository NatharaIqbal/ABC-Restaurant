import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, cartItems, url } = useContext(StoreContext);
  const [orderType, setOrderType] = useState('delivery');
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const orderData = {
      orderType,
      items: cartItems,
      amount: getTotalCartAmount(),
      ...(orderType === 'delivery' && { address: formData }),
      ...(orderType === 'dine-in' && { dineInInfo: formData }),
      ...(orderType === 'table-reservation' && { reservationInfo: formData }),
    };

    try {
      // Add order details to the database and get the response
      await axios.post(`${url}/api/order/place`, orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Navigate to the dummy payment success page
      navigate('/dummy-payment');
    } catch (error) {
      console.error("Error placing order:", error.response ? error.response.data : error.message);
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deliveryFee = orderType === 'delivery' ? 250 : 0;
  const totalAmount = getTotalCartAmount() + deliveryFee;

  return (
    <form className='place-order' onSubmit={handleOrder}>
      <div className="place-order-left">
        <p className='title'>Order Type</p>
        <div className="order-type-options">
          <label>
            <input
              type="radio"
              value="delivery"
              checked={orderType === 'delivery'}
              onChange={() => setOrderType('delivery')}
            />
            Delivery
          </label>
          <label>
            <input
              type="radio"
              value="dine-in"
              checked={orderType === 'dine-in'}
              onChange={() => setOrderType('dine-in')}
            />
            Dine-In
          </label>
          <label>
            <input
              type="radio"
              value="table-reservation"
              checked={orderType === 'table-reservation'}
              onChange={() => setOrderType('table-reservation')}
            />
            Table Reservation
          </label>
        </div>

        {orderType === 'delivery' && (
          <>
            <p className='title'>Delivery Information</p>
            <div className="multi-fields">
              <input type="text" name="firstName" placeholder='First name' onChange={handleChange} required />
              <input type="text" name="lastName" placeholder='Last name' onChange={handleChange} required />
            </div>
            <input type="email" name="email" placeholder='Email address' onChange={handleChange} required />
            <input type="text" name="street" placeholder='Street' onChange={handleChange} required />
            <div className="multi-fields">
              <input type="text" name="city" placeholder='City' onChange={handleChange} required />
              <input type="text" name="state" placeholder='State' onChange={handleChange} required />
            </div>
            <div className="multi-fields">
              <input type="text" name="zipCode" placeholder='Zip code' onChange={handleChange} required />
              <input type="text" name="country" placeholder='Country' onChange={handleChange} required />
            </div>
            <input type="text" name="phone" placeholder='Phone' onChange={handleChange} required />
          </>
        )}

        {orderType === 'dine-in' && (
          <>
            <p className='title'>Dine-In Information</p>
            <input type="number" name="numPeople" placeholder='Number of people' onChange={handleChange} required />
            <input type="datetime-local" name="reservationTime" onChange={handleChange} required />
            <input type="text" name="specialRequests" placeholder='Special requests' onChange={handleChange} />
          </>
        )}

        {orderType === 'table-reservation' && (
          <>
            <p className='title'>Table Reservation Information</p>
            <input type="number" name="numPeople" placeholder='Number of people' onChange={handleChange} required />
            <input type="datetime-local" name="reservationTime" onChange={handleChange} required />
            <input type="text" name="specialRequests" placeholder='Special requests' onChange={handleChange} />
          </>
        )}
      </div>

      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            {orderType === 'delivery' && (
              <>
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>Rs. {deliveryFee}</p>
                </div>
                <hr />
              </>
            )}
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs. {totalAmount}</b>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "PROCEED TO PAYMENT"}
            </button>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  // State for cart total
  const [cartTotal, setCartTotal] = useState(getTotalCartAmount() + 100);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page

    // Show success toast
    toast.success('Order placed successfully!', {
      position: 'top-right',
      onClose: () => {
        // Reload the page after the toast is closed
        setTimeout(() => {
          window.location.reload();
        }, 1000); // Adding delay for smoother experience
      },
    });

    // Reset form fields and cart total
    setFormData({
      fullName: '',
      email: '',
      address: '',
      phoneNumber: '',
    });
    setCartTotal(0); // Reset cart total
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Home Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{cartTotal === 0 ? 0 : cartTotal - 100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{cartTotal === 0 ? 0 : 100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{cartTotal}</b>
            </div>
          </div>
          <button type="submit">Confirm</button>
        </div>
      </div>
      {/* Toast Container for notifications */}
      <ToastContainer />
    </form>
  );
};

export default PlaceOrder;

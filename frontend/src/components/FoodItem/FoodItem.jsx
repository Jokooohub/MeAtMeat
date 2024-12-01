import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const FoodItem = ({ id, name, price, description, image, supplier, expirationDate }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Function to handle adding to cart with login check
  const handleAddToCart = () => {
    const loggedInEmail = localStorage.getItem('loggedInEmail'); // Check if the user is logged in

    if (!loggedInEmail) {
      toast.error('You need to log in to add items to the cart!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      }); // Show error notification
    } else {
      addToCart(id); // Proceed to add to cart
    }
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={handleAddToCart} // Call the handler function
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={handleAddToCart} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-supp">{supplier}</p>
        <p className="food-item-date">{expirationDate}</p>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₱{price}/kl</p>
      </div>
    </div>
  );
};

export default FoodItem;

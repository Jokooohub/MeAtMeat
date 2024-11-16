import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {

    const [image,setImage] = useState(false);

  return (
    <div className='add'>
        <form className='flex-col'>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input type="text" name="name" placeholder='Type here' id="" />
            </div>
            <div className="add-product-supplier flex-col">
                <p>Supplier</p>
                <input type="text" name="name" placeholder='Type here' id="" />
            </div>
            <div className="add-product-expdate flex-col">
                <p>Expiration Date</p>
                <input type="text" name="name" placeholder='Type here' id="" />
            </div>
            <div className="add-product-description flex-col">
                <p>Description</p>
                <textarea name="description" rows="6" placeholder='Write description here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Category</p>
                    <select name="category">
                        <option value="Beef">Beef</option>
                        <option value="Pork">Pork</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Lamb">Lamb</option>
                        <option value="Duck">Duck</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Frozen Food">Frozen Food</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Price</p>
                    <input type="Number" name="price" placeholder='₱20'/>
                </div>
            </div>
            <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
  )
}

export default Add
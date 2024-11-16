import React from 'react'
import './List.css'
import {assets} from '../../assets/assets'

const List = () => {
  return (
    <div className='list add flex-col'>
        <p>All Meat List</p>
        <div className="list-table">
          <div className="list-table-format title">
              <b>Image</b>
              <b>Name</b>
              <b>Supplier</b>
              <b>Expiration Date</b>
              <b>Description</b>
              <b>Category</b>
              <b>Price</b>
              <b>Action</b>
          </div>
          {/* {list.map((item,index)=>{
            return(
              <div key={index} className='list-table-format'>
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p>X</p>
              </div>
            )
          })} */}
          <div className="list-table-format">
            <img className='food' src={assets.food_1} alt="" />
            <p>Steak</p>
            <p>Monterey Meatshop</p>
            <p>2024-04-15</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, id!</p>
            <p>Beef</p>
            <p>12</p>
            <p className='cursor'>X</p>
          </div>
        </div>
    </div>
  )
}

export default List
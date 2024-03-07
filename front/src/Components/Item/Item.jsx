import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}src={props.image} alt=""/></Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price'>
                Rs.{props.price}
            </div>
        </div>
        <div className='item-weight'> 
          <p>{props.weight}</p>
        </div>
    </div>
  )
}

export default Item
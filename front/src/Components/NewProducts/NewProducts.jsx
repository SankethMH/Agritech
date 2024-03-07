import React from 'react'
import './NewProducts.css'
import Item from '../Item/Item'
import new_product from '../Assets/new_products'

const NewProducts = (props) => {
  return (
    <div className='new-products'>
      <h1>Featured Products</h1>
      <hr />
      <div className="n-products">
        {new_product.map((item,i)=>{
                return <Item id={item.id} key={i} name={item.name} image={item.image}  price={item.price} />
            })}
      </div>
    </div>
  )
}

export default NewProducts
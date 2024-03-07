import React, { useEffect } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { useState } from 'react'

const Popular = () => {

  const [popularProducts,setPopularProducts]=useState([]);
 
  useEffect(()=>{
    fetch('http://localhost:4001/popular').then((response)=>response.json()).then((data)=>setPopularProducts(data));
  },[])
  return (
    <div className='popular'>
        <h1>Fertilizers</h1>
        <hr/>
        <div className='popular-item'>
          {popularProducts.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
          })}
        </div>
    </div>
  )
}

export default Popular
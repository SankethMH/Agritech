import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { HomeContext } from '../../Context/HomeContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(HomeContext);
    return (
    <div className='productdisplay'>
        {/*<div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
        </div>*/}
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt=""/>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>122</p>
            </div>
            <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-new">Rs.{product.price}</div>
        </div>
        <div className="productdisplay-right-weight">
            {product.weight}kg
        </div>
        <div className='productdisplay-right-description'>
        {product.shortdesc}
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span>{product.category}</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Organic</p>

        </div>
    </div>
  )
}

export default ProductDisplay
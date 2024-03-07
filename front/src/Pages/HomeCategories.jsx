import React, { useContext } from 'react'
import './CSS/HomeCategories.css'
import { HomeContext } from '../Context/HomeContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import { Link } from 'react-router-dom'

const HomeCategories = (props) => {
  const {all_product}=useContext(HomeContext)
  return (
    <div className='home-category'>
      <div className='homecategory-indexSort'>
      <p>
      <span>Showing 1 - 6</span> out of 24 Products</p>
        <div className="homecategory-sort">Sort by  <img src={dropdown_icon} alt="" /></div>
      </div>
      <div className="homecategory-products">
        {all_product.map((item,i) => {
            if(props.category===item.category)
            {
              return <Item id={item.id} key={i} name={item.name} image={item.image} price={item.price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
      <div className="homecategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};


export default HomeCategories
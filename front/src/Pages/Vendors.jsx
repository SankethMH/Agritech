import React, { useState } from 'react';
import './CSS/Vendor.css'
import { Link } from 'react-router-dom';

import eb from '../Components/Assets/Eq_b.jpg';
import fb from '../Components/Assets/F_B.avif';
import sb from '../Components/Assets/S_B.png';
import em from '../Components/Assets/Eq_m.jpeg';
import sm from '../Components/Assets/S_M.jpg';
import fm from '../Components/Assets/F_M.jpg';
import et from '../Components/Assets/Eq_t.avif';
import st from '../Components/Assets/S_T.jpg';
import ft from '../Components/Assets/F_T.jpg';


const Vendors = () => {
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [vendors, setVendors] = useState([
        { id: 1, name: 'Agri Future India', district: 'Bengaluru',category:'equipments', image:eb,path:'/v1'},
        { id: 2, name: 'Arsalan Agro Traders', district: 'Mysuru' ,   category:'equipments',image:em,path:'/v2'},
        { id: 3, name: 'Vinayak Agro Traders', district: 'Tumkuru',   category:'equipments',image:et,path:'/v3' },
        { id: 4, name: 'Sri Venkateshwar Hybrid Seeds', district: 'Bengaluru', category:'seeds',image:sb,path:'/v4'},
        { id: 5, name: 'Sri Venkateshwar Hybrid Seeds', district: 'Mysuru',    category:'seeds',image:sm,path:'/v5'},
        { id: 6, name: 'Raghavendra Enterprise', district: 'Tumkuru',   category:'seeds',image:st,path:'/v6'},
        { id: 7, name: 'J.S Kashmir Fertilizers', district: 'Bengaluru',category:'agro',image:fb,path:'/v7'},
        { id: 8, name: 'Annadaatha Agro kendra', district: 'Mysuru' ,  category:'agro',image:fm,path:'/v8'},
        { id: 9, name: 'Manju Agency', district: 'Tumkuru' ,category:'agro',image:ft,path:'/v9'},
    ]);

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredVendors = vendors.filter((vendor) => {
        const matchesDistrict = !selectedDistrict || vendor.district === selectedDistrict;
        const matchesCategory = !selectedCategory || vendor.category === selectedCategory;
        return matchesDistrict && matchesCategory;
    });

    return (
        <div className='b'>
            <div className='blog-heading'>
                <h2 style={{ textAlign: 'center' }}>Vendors</h2>
            </div>
            <section id='blog'>
            <div className='filter-container'>
                <div className='district-filter'>
                <span> <label htmlFor='district-select'>Select District:</label>
                    <select
                        id='district-select'
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                    >
                        <option value=''>All Districts</option>
                        <option value='Bengaluru'>Bengaluru</option>
                        <option value='Mysuru'>Mysuru</option>
                        <option value='Tumkuru'>Tumkuru</option>
                    </select>
                        <label htmlFor='category-select'>Select Category:</label>
                        <select
                            id='category-select'
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value=''>All Categories</option>
                            <option value='equipments'>Equipments</option>
                            <option value='seeds'>Seeds</option>
                            <option value='agro'>Agro</option>
                        </select></span>
                   
                    </div>
                </div>
                <div className='blog-container'>
                    {filteredVendors.map((vendor) => (
                        <div className='blog-box' key={vendor.id}>
                            <div className='blog-img'>
                                <img src={`${vendor.image}`} alt={`Vendor ${vendor.id}`} />
                            </div>
                            <div className='blog-text'>
                                <span>Vendors</span>
                                <p className='blog-title'>{vendor.name}</p>
                                <p>District: {vendor.district}<br></br>Category: {vendor.category}</p>
                                <Link to={`${vendor.path}`}>View Details</Link>
                            </div>
                        </div>
                    ))};
                </div>
          </section>
        </div>
        
    );
};

export default Vendors;

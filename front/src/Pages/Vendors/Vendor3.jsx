import React from 'react'
import '../CSS/Vendor.css'
import et from '../../Components/Assets/Eq_t.avif'
import et1 from '../../Components/Assets/et1.avif'
import et2 from '../../Components/Assets/et2.avif'
import et3 from '../../Components/Assets/et3.avif'
const Vendor3 = () => {
  return (
    <div>
        <div className='blog1'>
            <div className="b-container">
                <div className="b-title" >
                    <h2>Shree Vinayaka Agro Tools</h2>
                </div>
                <div className="b-content">
                    <img src={et} alt="" style={{height:250}}/>
                    <p>Products Availabe : All types of small and medium sized arriculture equipments</p>
                    <p>Address : Shree Vinayaka Agro Tools, Madhugiri Road, Tumkur </p>
                    <p><a href='https://maps.app.goo.gl/pvt4wjG2oeJmVokj7' target='blank'>Click here for map</a></p>
                    <br></br>
                    <img src={et1} alt="" style={{height:250, paddingRight:20}}/>
                    <img src={et2} alt="" style={{height:250, paddingRight:20}}/>
                    <img src={et3} alt="" style={{height:250,paddingRight:20}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vendor3
import React from 'react'
import '../CSS/Vendor.css'
import eb from '../../Components/Assets/Eq_b.jpg'
import eb1 from '../../Components/Assets/eb1.png'
import eb2 from '../../Components/Assets/eb2.png'
import eb3 from '../../Components/Assets/eb3.jpg'
const Vendor1 = () => {
  return (
    
        <div>
        <div className='blog1'>
            <div className="b-container">
                <div className="b-title" >
                    <h2>Agri Future India</h2>
                </div>
                <div className="b-content">
                    <img src={eb1} alt="" style={{height:250}}/>
                    <p>Products Availabe : All types of small and medium sized arriculture equipments</p>
                    <p>Address : 992, 3rd Main Rd, 2nd Phase, Kalidasa Nagar, Banashankari 3rd Stage, Hosakerehalli, Bengaluru, Karnataka 560085</p>
                    <p><a href='https://maps.app.goo.gl/bxoGffUEnmwM7DBq6' target='blank'>Click here for map</a></p>
                    <br></br>
                    <img src={eb} alt="" style={{height:250, paddingRight:20}}/>
                    <img src={eb2} alt="" style={{height:250, paddingRight:20}}/>
                    <img src={eb3} alt="" style={{height:250,paddingRight:20}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vendor1
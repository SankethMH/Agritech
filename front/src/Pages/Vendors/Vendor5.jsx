import React from 'react'
import '../CSS/Vendor.css'
import sm from '../../Components/Assets/S_M.jpg'
const Vendor5 = () => {
  return (
    <div>
        <div className='blog1'>
            <div className="b-container">
                <div className="b-title" >
                    <h2>Sri Venkateshwar Hybrid Seeds</h2>
                </div>
                <div className="b-content">
                    <img src={sm} alt="" style={{height:250}}/>
                    <p>Products Availabe : All types of small and medium sized arriculture equipments</p>
                    <p>Address :No.188, 1, Ramavilas Rd, Subbarayanakere, Chamrajpura, Mysuru, Karnataka 570004 </p>
                    <p><a href='https://maps.app.goo.gl/kkvfC3suN7RqpSJ16' target='blank'>Click here for map</a></p>
                    <br></br>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vendor5
import React from 'react'
import '../CSS/Vendor.css'
import em from '../../Components/Assets/Eq_m.jpeg'
import em1 from '../../Components/Assets/em1.jpg'
import em2 from '../../Components/Assets/em2.png'

const Vendor2 = () => {
  return (
    <div>
        <div className='blog1'>
            <div className="b-container">
                <div className="b-title" >
                    <h2>Arsalan Agro Traders </h2>
                </div>
                <div className="b-content">
                    <img src={em2} alt="" style={{height:250}}/>
                    <p>Products Availabe : All types of small and medium sized arriculture equipments</p>
                    <p>Address : Apmc Yard, 282/1, 5th Cross Road, Bandipalya, Mysuru, Karnataka 570025 </p>
                    <p><a href='https://maps.app.goo.gl/dcbka3hWnh2TmodU8' target='blank'>Click here for map</a></p>
                    <br></br>
                    <img src={em1} alt="" style={{height:250, paddingRight:20}}/>
                    <img src={em} alt="" style={{height:250, paddingRight:20}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vendor2
import React from 'react'
import '../CSS/Vendor.css'
import fb from '../../Components/Assets/F_B.avif'
import fb1 from '../../Components/Assets/fb1.avif'
import fb2 from '../../Components/Assets/fb2.webp'
import fb3 from '../../Components/Assets/fb3.avif'
const Vendor7 = () => {
  return (
    <div>
        <div className='blog1'>
            <div className="b-container">
                <div className="b-title" >
                    <h2>J S Kashmir Fertilizer</h2>
                </div>
                <div className="b-content">
                    <img src={fb} alt="" style={{height:250}}/>
                    <p>Dealers in all kind of fertilizers, pesticides and spray pumps</p>
                    <p>Address : J S Kashmir Fertilizer,No.32 ,Russel Market Shivaji Nagar, Bangalore</p>
                    <p><a href='https://maps.app.goo.gl/8XJyaovSkgsw2tAK6' target='blank'>Click here for map</a></p>
                    <br></br>
                    <img src={fb1} alt="" style={{height:250, paddingRight:20}}/>
                    <img src={fb2} alt="" style={{height:250, paddingRight:20}}/>
                    <img src={fb3} alt="" style={{height:250,paddingRight:20}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vendor7
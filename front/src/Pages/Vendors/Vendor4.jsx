import React from 'react'
import '../CSS/Vendor.css'
import sb from '../../Components/Assets/S_B.png'
import sb1 from '../../Components/Assets/sb1.jpg'
import sb2 from '../../Components/Assets/sb2.jpg'

const Vendor4 = () => {
  return (
    <div><div className='blog1'>
    <div className="b-container">
        <div className="b-title" >
            <h2>Sri Venkateshwar Hybrid Seeds</h2>
        </div>
        <div className="b-content">
            <img src={sb} alt="" style={{height:250}}/>
            <p>Products Availabe : All types hybrid seeds are availabe</p>
            <p>Address : No. 399/2, Bellary Main Road, Hebbal, Bangalore - 560024 (Opposite Kssc) </p>
            <p><a href='https://maps.app.goo.gl/JZ9midA2DWZxmfUx6' target='blank'>Click here for map</a></p>
            <br></br>
            <img src={sb1} alt="" style={{height:250, paddingRight:20}}/>
            <img src={sb2} alt="" style={{height:250, paddingRight:20}}/>
           
    </div>
</div></div></div>
  )
}

export default Vendor4
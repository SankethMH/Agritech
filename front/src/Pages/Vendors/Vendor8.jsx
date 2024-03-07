import React from 'react'
import '../CSS/Vendor.css'
import fm from '../../Components/Assets/F_M.jpg'
import fm1 from '../../Components/Assets/fm1.jpg'
const Vendor8 = () => {
  return (
    <div>
        <div className='blog1'>
            <div className="b-container">
                <div className="b-title" >
                    <h2>Annadaatha Agro kendra</h2>
                </div>
                <div className="b-content">
                    <img src={fm} alt="" style={{height:250}}/>
                    <p>Dealers of seeds, fertilizers and pesticides </p>
                    <p>Address : 194, Ram Vilas Road, Ram Vilas Road, K.R. Mohalla, near Sadvidya College, Mysuru, Karnataka 570024</p>
                    <p><a href='https://maps.app.goo.gl/P5RVsrkzy2g59VW8A' target='blank'>Click here for map</a></p>
                    <br></br>
                    <img src={fm1} alt="" style={{height:250, paddingRight:20}}/>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vendor8
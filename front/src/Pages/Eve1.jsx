import React from 'react'
import './CSS/Eve.css'
import e1 from '../Components/Assets/e1.png'
const Eve1 = () => {
  return (
    <div className='blog1'>
        <div className="b-container">
        <div className="b-title">
            <h2>Agriculture Expo 2024</h2>
        </div>
        <div className="b-content">
            <img src={e1} alt="" style={{marginLeft:350}}/>
            <p>The Confederation of Indian Industry (CII-Telangana) will be organising the Agri Tech South 2024 Exhibition and Agri Vision Conference at Professor Jayashankar Telangana State Agricultural University in Hyderabad during February 16-18.
            </p>
            <p>A host of companies, industry leaders, experts and senior officials will participate in the the event, focussed on promoting agriculture, food processing and allied sectors in the southern region of the country.
            </p>
            <p>Over 100 exhibitors will be participating in the three-day exhibition, which would be held on 5,000-odd square metre, whereas the two-day conference is expected to receive over 1,000 delegates and feature 16 technical sessions and at least 65 speakers, CII said in a release on Monday.
            </p> 
        </div>
    </div>
    </div>
  )
}

export default Eve1
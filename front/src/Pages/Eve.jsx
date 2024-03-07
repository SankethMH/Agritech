import React from 'react';
import './CSS/Eve.css'
import e1 from '../Components/Assets/e1.png'
import e2 from '../Components/Assets/e2.avif'
import e3 from '../Components/Assets/e3.jpg'

import { Link } from 'react-router-dom';
const Eve=() =>{
    return ( 
    <div className='b'>
        <div className="blog-heading">
            <h2 style={{textAlign: 'center'}}>Events</h2>
        </div>
        <section id="blog">
            <div className="blog-container">
                <div className="blog-box">
                    <div className="blog-img">
                    <Link to='/eve1'><img src={e1} alt="Event 1" /></Link>
                    </div>
                    <div className="blog-text">
                        <span>Events</span>
                        <p className="blog-title">Agriculture Expo</p>
                        <p>Three-day CII agri-tech expo to begin in Hyderabad on February 16</p>
                        <Link to='/eve1'>Read more</Link>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <Link to='/eve1'> <img src={e2} alt="Event 2" /> </Link>
                    </div>
                    <div className="blog-text">
                        <span>Events</span>
                        <p className="blog-title">Utkal Agriculture Expo</p>
                        <p>Krishi Jagran is organizing 2nd Edition of Utkal Krishi Mela, Odisha.</p>
                        <Link to='/eve1'>Read more</Link>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <Link to='/eve3'><img src={e3} alt="Event 3" /></Link>
                    </div>
                    <div className="blog-text">
                        <span>Schemes</span>
                        <p className="blog-title">Government Schemes</p>
                        <p>A Central Government Scheme is a program or initiative that is implemented and supervised by a country's central government.</p>
                        <Link to='/eve3'>Read more</Link>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Eve;

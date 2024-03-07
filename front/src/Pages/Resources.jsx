import React from 'react'
import { Link } from 'react-router-dom'
import r1 from '../Components/Assets/res1.jpg'
import r2 from '../Components/Assets/res2.jpg'
import r3 from '../Components/Assets/res3.jpg'
import './CSS/Eve.css'

const Resources = () => {
  return (
    <div className='b'>
    <div className="blog-heading">
        <h2 style={{textAlign: 'center'}}>Resources</h2>
    </div>
    <section id="blog">
        <div className="blog-container">
            <div className="blog-box">
                <div className="blog-img">
                <Link to='/r1'><img src={r1} alt="Event 1" /></Link>
                </div>
                <div className="blog-text">
                    <span>Fertilizers</span>
                    <p className="blog-title">Know more about fertilizer</p>
                    <p>Fertilizers are substances that are added to soil or plants to provide essential nutrients that support plant growth and development.</p>
                    <Link to='/r1'>Read more</Link>
                </div>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <Link to='/r2'> <img src={r2} alt="Event 2" /> </Link>
                </div>
                <div className="blog-text">
                    <span>Equipments</span>
                    <p className="blog-title">Modern agriculture equipments</p>
                    <p>Modern agriculture equipment encompasses a wide range of machinery and tools designed to enhance efficiency, productivity, and sustainability in farming practices.</p>
                    <Link to='/r2'>Read more</Link>
                </div>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src={r3} alt="Event 3" />
                </div>
                <div className="blog-text">
                    <span>Mixed Croping</span>
                    <p className="blog-title">Croping Patterns</p>
                    <p>Mixed cropping is a farming practice where two or more crops are grown together in the same field simultaneously or in close proximity.</p>
                    <p>Read more</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Resources
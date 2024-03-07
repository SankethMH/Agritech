import React from 'react'
import './CSS/Eve.css'
import e3 from '../Components/Assets/e3.jpg'
import ev1 from '../Components/Assets/ev3.1.jpg'
import ev3 from '../Components/Assets/ev3.2.webp'
const Eve1 = () => {
  return (
    <div className='blog1'>
        <div className="b-container">
        <div className="b-title">
            <h2>Central Government Schemes For Farmers</h2>
        </div>
        <div className="b-content">
            <img src={e3} alt="" style={{marginLeft:350}}/>
            <p>Government schemes are necessary to provide better and sustainable livelihood to its citizens. Like any other sector, the agriculture sector also needs the attention of the government. The majority of the population in India is dependent on agriculture and allied activities for their livelihood.
            </p>
            <p>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</p>
            <img src={ev1} alt=""/>
            <p>The Pradhan Mantri Krishi Sinchai Yojana, or PMKSY, a centrally funded initiative started by the Government of India in 2015. Its goal is to increase farm output and ensure the efficient use of water resources in the agricultural sector. The scheme's major goal is to increase the area under irrigation and improve water efficiency through various components and interventions.</p>
            
            <p>Have a look at the key objectives of Pradhan Mantri Krishi Sinchai Yojana:</p>
              <p>  <ul style={{listStyleType:'disc'}}>
                <li>Har Khet Ko Pani (Water for Every Field): This agriculture scheme aims to provide assured irrigation to every farm field and ensure the optimal use of available water resources.</li>
                <li>Per Drop More Crop: The focus is on promoting micro-irrigation techniques such as drip irrigation, sprinklers, and precision irrigation to achieve higher water-use efficiency and increase agricultural productivity.</li>
                <li>Convergence of Resources: The scheme emphasizes the convergence of various resources and departments to achieve a comprehensive and holistic approach toward water management and irrigation infrastructure development</li>
            </ul> </p>
            <a href='https://pmksy.nic.in/'>Click here for applying PMKSY</a>
            <p>Paramparagat Krishi Vikas Yojana (PKVY)</p>
            <img src={ev3} alt=""/>
            <p>The national government established another agriculture scheme for farmers in 2015. This scheme was Paramparagat Krishi Vikas Yojana. The scheme's goal was to encourage organic agricultural practices in India. The initiative promotes farmers to use traditional and organic farming practices, reducing their reliance on chemical inputs. Its goals include increasing soil fertility, promoting sustainable agriculture, and ensuring the production of chemical-free, nutritious agricultural goods.</p>
            <p>Some important elements and components of the Paramparagat Krishi Vikas Yojana are as follows:
                <ul style={{listStyleType:'disc'}}>
                    <li>Organic agricultural promotion: This government subsidy scheme for farmers encourages the use of organic agricultural practices such as organic manures, bio-fertilizers, traditional seeds, and natural pest and disease management strategies.</li>
                    <li>Cluster-based approach: The project has a cluster-based strategy, in which a group of farmers (minimum 50 acres) practicing organic farming is grouped into clusters to promote better implementation, monitoring, and resource management.</li>
                    <li>Financial Help: Under this important government scheme in agriculture sector, farmers are given financial assistance to help them adopt organic agricultural practices. This includes support with organic input procurement, the creation of vermicomposting units, the establishment of seed banks, and capacity-building initiatives.</li>
                    <li>Certification assistance: PKVY assists farmers in acquiring organic certification for their produce. This allows farmers to get access to premium markets while also ensuring the authenticity of their organic products.</li>
                </ul>
            </p>
            <a href='https://www-myscheme-gov-in.translate.goog/schemes/pkvy?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc&_x_tr_hist=true' >Click here for applying PKVY</a>
        </div>
    </div>
    </div>
  )
}

export default Eve1
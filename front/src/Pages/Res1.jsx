import React from 'react'
import res1 from '../Components/Assets/res1.jpg'
import './CSS/Eve.css'
const Res1 = () => {
  return (
    <div>
        <div className='blog1'>
            <div className="b-container">
                <div className="b-title">
                    <h2>What are fertilizers? </h2>
                </div>
                <div className="b-content">
                    <img src={res1} alt="" style={{marginLeft:350}}/>
                    <p>Fertilizers are substances that are added to soil or plants to provide essential nutrients that support plant growth and development. These nutrients are crucial for various physiological processes, including photosynthesis, energy transfer, and overall plant metabolism. Fertilizers can enhance soil fertility and ensure that plants receive an adequate supply of nutrients.
                    </p>
                    <p>
                        There are two main types of fertilizers based on their source and composition:
                    </p>
                    <p>Over 100 exhibitors will be participating in the three-day exhibition, which would be held on 5,000-odd square metre, whereas the two-day conference is expected to receive over 1,000 delegates and feature 16 technical sessions and at least 65 speakers, CII said in a release on Monday.
                    </p> 
                    <p>Inorganic or Synthetic Fertilizers:<br></br>
                        <ul style={{listStyleType:'disc'}}>
                            <li>Nitrogen Fertilizers: Provide nitrogen, a key element for the synthesis of proteins and chlorophyll. Examples include urea, ammonium sulfate, and ammonium nitrate.</li>
                            <li>Phosphorus Fertilizers: Supply phosphorus, which is essential for energy transfer and the formation of DNA and RNA. Examples include superphosphate and triple superphosphate.</li>
                            <li>Potassium Fertilizers: Contain potassium, an important nutrient for overall plant growth and stress resistance. Examples include potassium chloride and potassium sulfate</li>
                            <li>Compound Fertilizers: Contain a combination of nitrogen, phosphorus, and potassium in varying ratios. Examples include NPK fertilizers (containing nitrogen, phosphorus, and potassium in different proportions).</li>
                        </ul> 
                    </p>
                    <p>
                        Organic Fertilizers:
                        <ul style={{listStyleType:'disc'}}>
                            <li>Manure: Animal waste, such as cow dung or poultry litter, is a common organic fertilizer rich in nutrients like nitrogen, phosphorus, and potassium.</li>
                            <li>Compost: Decomposed organic matter, such as kitchen scraps and yard waste, provides a slow-release source of nutrients.</li>
                            <li>Bone Meal: Ground bones are a source of phosphorus and calcium, beneficial for root development.</li>
                            <li>Fish Emulsion: Derived from fish byproducts, this organic fertilizer is high in nitrogen and trace elements.</li>
                        </ul>
                    </p>
                    <p>
                        Each type of fertilizer has its advantages and disadvantages. Inorganic fertilizers typically provide nutrients in a readily available form but may have environmental concerns, such as nutrient runoff. Organic fertilizers release nutrients more slowly and improve soil structure but may not supply nutrients in as concentrated a form as synthetic fertilizers.
                    </p>
                    <p>
                        Farmers and gardeners often use a combination of both types to achieve balanced and sustainable nutrient management for their crops or plants.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Res1
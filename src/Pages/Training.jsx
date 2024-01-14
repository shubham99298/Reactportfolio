import React from 'react'
import '../Style/Training.css'
import Contact from './Contact'

import Dev from '../assets/Dev.png'
const Training = () => {
  return (
    <>
      <hr/>
       <section className="secondsection" id="IT" >
            <span className="grey">What I have done </span>
            <h1>Internship And Training</h1>

           <div className="box">
             <div className="vertical">
                 <img className="img-top"src={Dev} alt=""/>
                 <div className="verticaltitle">
                    Web developer Internship 
                     (1 Apr 2023- 1 May 2023)

                 </div>
                 <div className="verticaldesc">
                     I have Completed One month intership tasks provided 
                     by Oasis Infobye...
                 </div>
             </div>




                
             <div className="vertical">
                <img className="img-top"src={Dev} alt=""/>
                <div className="verticaltitle">
                   MERN stack training
                   (21 JUL 2023 -5 SEPT 2023)
                </div>
                <div className="verticaldesc">
                 I Also completed a 45-day training program at Regex Software Pvt. Ltd., where I delved into the world of MERN technology. During this training, I gained proficiency in MongoDB, Express, React, and Node.js, and I put my skills to use by developing various projects, including clones and my personal portfolio.
                </div>
            </div>
              
            </div>
          </section>
          <Contact/>
    </>
  )
}

export default Training

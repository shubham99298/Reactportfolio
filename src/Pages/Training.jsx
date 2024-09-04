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
            <h1>Experience</h1>

           <div className="box">
             <div className="vertical">
                 <img className="img-top"src={Dev} alt=""/>
                 <div className="verticaltitle">
                     Associate Salesforce Developer
                     (Feb 2024-Ongoing)

                 </div>
                 <div className="verticaldesc">
                     <ul>
                      <li> Developed and optimized Salesforce Flows and Apex Triggers for automated business processes. </li>
                      <li> Designed and implemented Lightning Web Components (LWC) for dynamic user interfaces.</li>
                      <li>Configured Salesforce Service Cloud features, including Email-to-Case, chatbots, and Knowledge Articles.</li>
                      <li>Managed case-based scenarios, entitlement contracts, and customer service operation</li>
                     </ul>

                 </div>
             </div>

                
             <div className="vertical">
                <img className="img-top"src={Dev} alt=""/>
                <div className="verticaltitle">
                   Full Stack Developer Intern
                   (JUL 2023 -SEPT 2023)
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

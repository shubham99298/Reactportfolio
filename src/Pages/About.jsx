import React from 'react'
import '../Style/About.css'
import Projects from './Projects'

const About = () => {
  return (
    //    <!-- middle section -->
    <div>
    
       <section className="middlesection" id="about">
       <div>
           <img className="img" src="https://cdn.thecodehelp.in/ggudduf7qmr7yvjwtcs1_cd7567153f.svg" alt=""/>
       </div>

       <div className="mid">
           <h2>About me</h2>
           <p> I am a Full Stack Developer, passionate about building digital products that improve the everyday experience for people.

            I am a quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
           </p>
         
           <div className="skills">
               <h3 className="heading-quaternary about__heading-quaternary">
                   {'<Skills/>'}
                 </h3>
                 <ul className="about__skills">
                   <li className="about__skill">HTML</li>
                   <li className="about__skill">CSS</li>
                   <li className="about__skill">javascript</li>
                   <li className="about__skill">react</li>
                   <li className="about__skill">c++</li>
                   <li className="about__skill">git</li>
                   <li className="about__skill">Bootstrap</li>
                   <li className="about__skill">Mongo</li>
                   <li className="about__skill">Express</li>
                   <li className="about__skill">github</li>
                  
                 </ul>
           </div>
           
           
       </div>
   </section>
   <Projects/>
   </div>
  )
}

export default About

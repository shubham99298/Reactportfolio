import React from 'react'
import '../Style/About.css'
import Projects from './Projects'
import Skills from '../assets/Skills.mp4'


const About = () => {
  return (
    //    <!-- middle section -->
    <div>
    
       <section className="middlesection" id="about">
       {/* <div>
           <video className='img' width="350" height="300" controls >
            <source src={Skills} type="video/mp4"/>
          </video>
       </div> */}
       <div>
       <img className='img' width="350" height="400" src='https://miro.medium.com/v2/resize:fit:1272/1*ZSVmWGcc1weENb0ShawWxw.gif'></img>

       </div>

       <div className="mid">
           <h2>About me</h2>
           <p> I am a Full Stack Developer, passionate about building digital products that improve the everyday experience for people.

            I am a quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
           </p>
         
           <div className="skills">
               <h3 className="heading-quaternary about__heading-quaternary">
                   Skills
                 </h3>
                 <ul className="about__skills">
                   <li className="about__skill">HTML</li>
                   <li className="about__skill">CSS</li>
                   <li className="about__skill">javascript</li>
                   <li className="about__skill">reactJs</li>
                   <li className="about__skill">c++</li>
                   <li className="about__skill">git</li>
                   <li className="about__skill">Bootstrap</li>
                   <li className="about__skill">Mongo</li>
                   <li className="about__skill">NodeJs</li>
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

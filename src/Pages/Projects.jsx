import React from 'react'
import '../Style/Projects.css'
import Training from './Training'
const Projects = () => {
  return (
    <div>
        {/* <!-- projects --> */}
        <hr/>
                   <h2 id="pro">projects</h2>
                 <div class="projects" >
                     
                    <div className="project">
                        <div className="tag1">Travel Website </div>
                        <img src="project2.png" height="235px" alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam, nobis iure soluta dolorem  <br/>similique sunt quas provident pariatur, ad modi recusandae quibusdam
                         optio hic corrupti ex ut dicta eius!</p>

                         <button>live link</button>
                         <button>github</button>

                    </div>
                    <div className="project1">
                     <div className="tag1">Travel Website</div>
                     <img src="project1.png" height="230px" alt=""/>
                     <p>Created a dynamic travel website using MERN (MongoDB, Express, React, Node) stack. Incorporated user registration and authentication for easy access. Users can effortlessly search for  flights in a chosen country. Used React.js, Node.js, MongoDB, and JWT authentication to ensure a responsive and user-friendly experience. Demonstrated strong web development skills with a focus on enhancing user experience. </p>

                        <button>live link</button>
                        <button>github</button>
                    </div>
                    <div className="project">
                     <div className="tag1">Architect</div>
                      <img src="project3.png"  height="230px" alt=""/>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit ipsam, nobis iure soluta <br/> dolorem similique sunt
                         quas provident pariatur, ad modi <br/> recusandae quibusdam
                        optio hic corrupti ex ut dicta eius!</p>

                        <button>live link</button>
                        <button>github</button>
                    </div>
                    <div className="project1">
                     <div className="tag1">my portfolio</div>
                     <img src="project4.png" height="235px" alt=""/>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit ipsam, nobis iure soluta <br/> dolorem similique sunt
                         quas provident pariatur, ad modi <br/> recusandae quibusdam
                        optio hic corrupti ex ut dicta eius!</p>

                        <button>live link</button>
                        <button>github</button>
                    
                    </div>
                    
                </div>

                <Training/>
                

    </div>
  )
}

export default Projects

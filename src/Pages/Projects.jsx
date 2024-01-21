import React from "react";
import "../Style/Projects.css";
import Training from "./Training";



import  project2 from '../assets/project2.png'
import  project1 from '../assets/project1.png'
import  project3 from '../assets/project.png'
import  project4 from '../assets/project4.png'

const Projects = () => {
  return (
    <div>
    
      <hr />
      <h2 id="pro">projects</h2>
      <div className="projects">
        <div className="project">
          <div className="tag1">WebChat</div>
           
          <img src={project2} height="230px" alt="" />
          <ul>
            <p>Tech stack</p>
            <button className="Tech">Socket.IO</button>
            <button className="Tech">JavaScript</button>
            <button className="Tech">NodeJs</button>
            <button className="Tech">CSS</button>

           <li>Developed a real-time chat application using Node.js and Socket.IO,
            demonstrating expertise
            <br /> in server-side JavaScript and real-time communication</li>
          
            
          </ul>
          <button>Preview</button>
          <a href="https://github.com/shubham99298/ChatApp"><button>github</button></a>
          
        </div>
        <div className="project1">
          <div className="tag1">Travel Website</div>
          <img src={project1}height="230px" alt="" />
          <ul>
          <p>Tech stack</p>
            <button className="Tech">HTML5</button>
            <button className="Tech">CSS3</button>
            <button className="Tech">JavaScript</button>
            <button className="Tech">ReactJS</button>
            <li>Created a dynamic travel website using MERN (MongoDB, Express,
            React, Node) stack.</li>
            <li>Incorporated user registration and
            authentication for easy access.</li>
            <li>Users can effortlessly search for
            flights in a chosen country. Used React.js, Node.js, MongoDB, and
            JWT authentication to ensure a responsive and user-friendly
            experience.</li>
            <li>Demonstrated strong web development skills with a focus
            on enhancing user experience.{" "}</li>
               
          </ul>
          <a href="https://65a8032106777f0007e0fc77--clever-starlight-d25543.netlify.app/"><button>Preview</button></a>
          <a href="https://github.com/shubham99298/Travel"><button>github</button></a>
        </div>
        <div className="project">
          <div className="tag1">To-do</div>
          <img src={project3} height="230px" alt="" />
          <ul>
          <p>Tech stack</p>
            <button className="Tech">HTML5</button>
            <button className="Tech">ReactJS</button>
            <button className="Tech">CSS3</button>
            <li>Created a sleek Todo application using React.js.</li>
            <li>employing its
            component-based structure for efficient task management.</li>
            <li>Implemented
            features include adding, editing, and deleting tasks,<br/> showcasing my
            proficiency in building responsive and user-friendly interfaces with
            React.js.</li>
           
          </ul>

          <a href="https://ornate-tarsier-087b79.netlify.app/"><button>Preview </button></a>   
          <a href="https://github.com/shubham99298/TodoUsingReactjs"><button className="Btn">github</button></a>
          
        </div>
        <div className="project1">
          <div className="tag1">BlogApp</div>
          <img src={project4} height="235px" alt="" />
          <ul>
          <p>Tech stack</p>
            <button className="Tech">NodeJs</button>
            <button className="Tech">ExpressJS</button>
            <button className="Tech">ReactJS</button>
            <button className="Tech">MongoDB</button>
            <li>  Successfully developed a full-stack blog web application using the
            MERN (MongoDB, Express.js, React, Node.js) stack. </li>
            <li> Responsible for
            designing and implementing both the frontend and backend components,
            ensuring a seamless user experience.</li>
            <li>Integrated MongoDB for
            efficient data storage and retrieval, implemented RESTful API
            endpoints, and utilized React for building a dynamic and responsive
            user interface.{" "}</li>
            
          </ul>

          <button>Preview</button>
          <a href='https://github.com/shubham99298/Blogapp'><button>github</button></a>
          
        </div>
      </div>

      <Training />
    </div>
  );
};

export default Projects;

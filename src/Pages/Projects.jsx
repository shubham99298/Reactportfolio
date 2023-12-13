import React from "react";
import "../Style/Projects.css";
import Training from "./Training";



const Projects = () => {
  return (
    <div>
      {/* <!-- projects --> */}
      <hr />
      <h2 id="pro">projects</h2>
      <div class="projects">
        <div className="project">
          <div className="tag1">WebChat</div>
          <img src="project2.png" height="235px" alt="" />
          <p>
            Developed a real-time chat application using Node.js and Socket.IO,
            demonstrating expertise
            <br /> in server-side JavaScript and real-time communication
          </p>

          <button>live link</button>
          <button>github</button>
        </div>
        <div className="project1">
          <div className="tag1">Travel Website</div>
          <img src="project1.png"height="230px" alt="" />
          <p>
            Created a dynamic travel website using MERN (MongoDB, Express,
            React, Node) stack. Incorporated user registration and
            authentication for easy access. Users can effortlessly search for
            flights in a chosen country. Used React.js, Node.js, MongoDB, and
            JWT authentication to ensure a responsive and user-friendly
            experience. Demonstrated strong web development skills with a focus
            on enhancing user experience.{" "}
          </p>

          <button>live link</button>
          <button>github</button>
        </div>
        <div className="project">
          <div className="tag1">Todo</div>
          <img src="project3.png" height="230px" alt="" />
          <p>
            Created a sleek Todo application using React.js, <br/>employing its
            component-based structure for efficient task management. <br/>Implemented
            features include adding, editing, and deleting tasks,<br/> showcasing my
            proficiency in building responsive and user-friendly interfaces with
            React.js.
          </p>

          <button>live link</button>
          <button>github</button>
        </div>
        <div className="project1">
          <div className="tag1">BlogApp</div>
          <img src="project4.png" height="235px" alt="" />
          <p>
            Successfully developed a full-stack blog web application using the
            MERN (MongoDB, Express.js, React, Node.js) stack. Responsible for
            designing and implementing both the frontend and backend components,
            ensuring a seamless user experience. Integrated MongoDB for
            efficient data storage and retrieval, implemented RESTful API
            endpoints, and utilized React for building a dynamic and responsive
            user interface.{" "}
          </p>

          <button>live link</button>
          <button>github</button>
        </div>
      </div>

      <Training />
    </div>
  );
};

export default Projects;

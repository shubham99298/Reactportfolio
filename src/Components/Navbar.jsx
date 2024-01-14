import React from 'react'
import '../Style/Navbar.css'
import {Link} from 'react-router-dom'
import {HashLink} from "react-router-hash-link"




import logo from '../assets/logo.jpg'


const Navbar = () => {
  return (
    <div>
    <header>

      
        <nav>
            {/* <!-- for logo  --> */}
            <div className="left">

                <img  src={logo} alt=""/>
               
                {/* <h1>{'<MyPortfolio/>'}</h1> */}
                
            </div>
        
            <div className="right">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><HashLink to="/#pro">Projects</HashLink></li>
                <li><HashLink to="/#IT">Training</HashLink></li>
                <li><HashLink to="/#contact">Contact me</HashLink></li>
                 

                   
                </ul>
            </div>

        </nav>
    


    </header>
  
    </div>
  )
}

export default Navbar

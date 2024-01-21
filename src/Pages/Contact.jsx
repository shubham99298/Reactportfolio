import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaPhone} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import '../Style/Contact.css'

const Contact = () => {
  return (
    <div style={{color:"black"}} id='contact'>
        <hr/>
       <h2 className='contactus'>Contact me</h2>
     <div className='contact'>
     <img className="bgpng" src="https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966" alt=""/>


        <div className='social'>
        <FaPhone/>
        <h2>+91 9929808981</h2>
        </div>

        <div className='social'>
        <AiFillMail/>
        <h2>
         <a href='mailto:shubhamlata2002@gmail.com'>shubhamlata2002@gmail,com</a>
      </h2>
        </div>

        <div className='social'>
      <FaLinkedin />
      <h2>
         <a href='https://www.linkedin.com/in/shubham-kumar-sharma-5244a6274/'>Linkedin</a>
      </h2>
    </div>

        <div className='social'>
        <FaGithub/>
        <h2>
         <a href='https://github.com/shubham99298'>Github</a>
      </h2>
        </div>
       
       <h1>Thank You !</h1>
     </div>
    </div>
  )
}

export default Contact

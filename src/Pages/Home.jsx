// import Typist from 'react-typist';
import '../Style/Home.css'
import About from './About'
import { FaGithub } from 'react-icons/fa'



const Home = () => {
   
  return (
    <div>
        <section className="firstsection" id="home">
            <div className="leftsection">
                 <div> Hey ! ,I am</div><span class="purple">Shubham Kumar Sharma</span> 
                <div>and I am a </div>
                <span className='grey'>Full stack developer</span>

            

                <div class="buttons">
                <a href="https://drive.google.com/drive/folders/1egw8C_toEomxu6FBxacOXzfotg_rBlu9" target="_blank"><button class="btn" >  My Resume</button></a> 
                <a href="https://github.com/shubham99298" target="_blank"><button class="btn" ><FaGithub/>  github</button></a>
                </div>
            </div>
            <div className="rightsection">
                  
                  

                <img className="bgpng" src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966" alt=""/>
                {/* <!-- <img class="bgpng" src="laptop.png" alt=""> --> */}

              

            </div>
          
        </section>

        <hr/>
         
        <About/>
 
 



 
    </div>
  )
}

export default Home

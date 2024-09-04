import { motion } from 'framer-motion';
import '../Style/Home.css';
import About from './About';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <section className="firstsection" id="home">
        <div className="leftsection">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey ! , I am
          </motion.div>

          <motion.span
            className="purple"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Shubham Kumar Sharma
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            and I am a 
          </motion.div>

          <motion.span
            className="grey"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Full stack developer
          </motion.span>

          <motion.div
            className="buttons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <a href="https://drive.google.com/drive/folders/1egw8C_toEomxu6FBxacOXzfotg_rBlu9" target="_blank" rel="noopener noreferrer">
              <button className="btn">My Resume</button>
            </a>
            <a href="https://github.com/shubham99298" target="_blank" rel="noopener noreferrer">
              <button className="btn"><FaGithub /> GitHub</button>
            </a>
          </motion.div>
        </div>

        <div className="rightsection">
          <img className="bgpng" src="https://cdn.thecodehelp.in/ggudduf7qmr7yvjwtcs1_cd7567153f.svg" alt=""/>
        </div>
      </section>

      <hr/>

      <About/>
    </div>
  );
};

export default Home;

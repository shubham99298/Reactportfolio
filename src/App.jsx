
// import reactLogo from './assets/react.svg'


import {BrowserRouter,Route,Routes} from 'react-router-dom'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {
 

  return (
   <BrowserRouter>

   
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/about' element={<About/>}/> */}
    </Routes>


   </BrowserRouter>
  )
}

export default App

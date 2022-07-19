import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import Home from './components/Home'
import Dropdown from './components/Dropdown'
import About from './components/About'
import Projects from './components/Projects'
import { IoIosApps } from 'react-icons/io';
import { IoShareSocialSharp, IoDocumentText } from 'react-icons/io5';
import { AiFillHome, AiFillHighlight } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import programmerVelvet from './images/programmerVelvet.png'
import programmerCyber from './images/programmerCyber.png'


function App() {
  const [navBarClicked, setNavBarClicked] = useState({app: 'App', home:'nav-op norm', projects: 'nav-op norm', about: 'nav-op norm', socials: 'nav-op', resume: 'nav-op resume'})
  
  const [programmer, setProgrammer] = useState(programmerCyber)


  const velvetThemeClicked = () => {
    document.body.classList = 'velvet-theme'
    setProgrammer(programmerVelvet)
  }
  const lightThemeClicked = () => {
    document.body.classList = 'light-theme'
    setProgrammer(programmerVelvet)
  }
  const cyberThemeClicked = () => {
    document.body.classList = 'cyber-theme'
    setProgrammer(programmerCyber)
  }


  return (
    <div className={navBarClicked.app}>
      <nav className='nav'>
        <div className='spacer'></div>
        <div className='nav-elem'><Link className={navBarClicked.home} to='/'> <span className='nav-icon'><AiFillHome/></span><span className='nav-word'> Home</span></Link></div>

        <div className='nav-elem'><Link className={navBarClicked.projects} to='/projects'> <span className='nav-icon' alt='Projects Icon'><IoIosApps/></span> <span className='nav-word'> Projects</span></Link></div>

        <div className='nav-elem'><Link className={navBarClicked.about} to='/about'> <span className='nav-icon' alt='About Icon'><BsFillPersonFill/></span><span className='nav-word'> About</span></Link></div>

        <div className='nav-elem res-pop'><div className={navBarClicked.resume}>  <span className='nav-icon' alt='Socials Icon'><IoShareSocialSharp/> </span><span className='nav-word'> Socials </span></div><Dropdown isResume={0} cyberThemeClicked={cyberThemeClicked} lightThemeClicked={lightThemeClicked} velvetThemeClicked={velvetThemeClicked}/></div>
        

        <div className='nav-elem res-pop'><div className={navBarClicked.resume}> <span className='nav-icon' alt='Resume Icon'><IoDocumentText/></span> <span className='nav-word'> Resume </span></div><Dropdown isResume={1} cyberThemeClicked={cyberThemeClicked} lightThemeClicked={lightThemeClicked} velvetThemeClicked={velvetThemeClicked}/></div>

        <div className='nav-elem res-pop'><div className={navBarClicked.resume}> <span className='nav-icon' alt='Themes Icon'><AiFillHighlight/></span> <span className='nav-word'> Themes </span></div><Dropdown isResume={2} cyberThemeClicked={cyberThemeClicked} lightThemeClicked={lightThemeClicked} velvetThemeClicked={velvetThemeClicked}/></div>

        <div className="spacer2"></div>
      </nav>

      <Routes>
        <Route path='/' element={<Home programmer={programmer}/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import Home from './components/Home'
import Dropdown from './components/Dropdown'
import About from './components/About'
import Projects from './components/Projects'
import Socials from './components/Socials'
import { IoIosApps } from 'react-icons/io';
import { IoShareSocialSharp, IoDocumentText } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'

function App() {
  const [navBarClicked, setNavBarClicked] = useState({home:'nav-op norm', projects: 'nav-op norm', about: 'nav-op norm', socials: 'nav-op', resume: 'nav-op resume'})
  document.title = 'Marcus Loy'

  const changeNav = (event) => {
    // let clickedVal = event.target.closest('.nav-op').textContent.toLowerCase().slice(1)
    // let clicked = {home:'nav-op', projects: 'nav-op', about: 'nav-op', socials: 'nav-op', resume: 'nav-op'}
    // clicked[clickedVal] = 'nav-op clicked'
    // setNavBarClicked(clicked)
    // console.log(clicked)
  }

  return (
    <div className="App">
      <nav className='nav'>
        <div className='spacer'></div>
        <div className='nav-elem' onClick={changeNav}><Link className={navBarClicked.home} to='/'><AiFillHome/><span className='nav-word'> Home</span></Link></div>

        <div className='nav-elem' onClick={changeNav}><Link className={navBarClicked.projects} to='/projects'><IoIosApps/> <span className='nav-word'> Projects</span></Link></div>

        <div className='nav-elem' onClick={changeNav}><Link className={navBarClicked.about} to='/about'><BsFillPersonFill/><span className='nav-word'> About</span></Link></div>

        <div className='nav-elem res-pop' onClick={changeNav}><div className={navBarClicked.resume}><IoShareSocialSharp/> <span className='nav-word'> Socials </span></div><Dropdown isResume={false}/></div>
        

        <div className='nav-elem res-pop' onClick={changeNav}><div className={navBarClicked.resume}><IoDocumentText/> <span className='nav-word'> Resume </span></div><Dropdown isResume={true}/></div>
        <div className="spacer2"></div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/socials' element={<Socials/>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;

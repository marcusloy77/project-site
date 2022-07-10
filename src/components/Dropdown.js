import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import './Resume.css'
import Resume from './Resume'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
const Dropdown = ({isResume}) => {
  console.log(isResume)
  if (isResume) {
    return (
      
        <div className="dropdown">
          <div className="popout">
            <div className="pdf downloadPdf"> <span className='dropdown-text'>Download PDF </span> <span className='dropdown-text-alt'>Download Resume </span> </div>
            <Link className="pdf viewPdf"  to='/resume'><span className='dropdown-text'>View PDF</span> <span className='dropdown-text-alt'>View Resume </span> </Link>
          </div>
          <Routes>
            <Route path='/resume' element={<Resume/>}/>
          </Routes>
        </div>
    )
}
  else {
    return (
      <div className="dropdown">
        <div className="popout">
          <div className="pdf linkedIn"> <a href='https://www.linkedin.com/in/marcus-loy/' className='dropdown-line' target="_blank" rel="noreferrer"><FaLinkedinIn/> <span className='dropdown-text keep'>LinkedIn</span> </a></div>
          <div className="pdf gitHub"> <a href='https://github.com/marcusloy77' target="_blank" rel="noreferrer" className='dropdown-line'><AiFillGithub/> <span className='dropdown-text keep'>Github</span>  </a></div>
        </div>
      </div>
  )
  }
}

export default Dropdown
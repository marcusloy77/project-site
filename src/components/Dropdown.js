import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import './Resume.css'
import Resume from './Resume'

const Dropdown = () => {
  return (
    <>
      <div className="dropdown">
        <div className="resume-popout">
          <div className="pdf downloadPdf"> <span className='dropdown-text'>Download PDF </span></div>
          <Link className="pdf viewPdf"  to='/resume'><span className='dropdown-text'>View PDF</span> </Link>
        </div>
      </div>
      <Routes>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </>
  )
}

export default Dropdown
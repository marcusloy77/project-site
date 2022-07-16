import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai'
import { GoEye } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'
import CV from './cv2.pdf'

const Dropdown = ({isResume}) => {
  if (isResume == 1) {
    return (
        <div className="dropdown">
          <div className="popout">
            <div className="pdf downloadPdf"> <a href={CV} download> <AiOutlineDownload/> <span className='dropdown-text'> Download PDF </span> <span className='dropdown-text-alt'> Download Resume </span> </a> </div>

            <div className="pdf viewPdf"> <a href={CV} target="_blank" rel="noreferrer"> <GoEye/><span className='dropdown-text'> View PDF</span> <span className='dropdown-text-alt'>View Resume </span> </a> </div>
            <div className="spacer3"></div>

          </div>
          
        </div>
    )
}
  else if (isResume === 0) {
    return (
      <div className="dropdown">
        <div className="popout">
          <div className="pdf linkedIn"> <a href='https://www.linkedin.com/in/marcus-loy/' className='dropdown-line' target="_blank" rel="noreferrer"><FaLinkedinIn/> <span className='dropdown-text keep'>LinkedIn</span> </a></div>
          <div className="pdf gitHub"> <a href='https://github.com/marcusloy77' target="_blank" rel="noreferrer" className='dropdown-line'><AiFillGithub/> <span className='dropdown-text keep'>Github</span>  </a></div>
          <div className="pdf email-link"> <a href="mailto:marcus.loy.77@gmail.com" className='dropdown-line'><MdEmail/> <span className='dropdown-text keep'>Email</span>  </a></div>
        </div>
      </div>
  )
  }

  else if (isResume === 2) {
    return (<div className="dropdown">
        <div className="popout">
          <div className="pdf cyber"> <div className='dropdown-line'> <FaLinkedinIn/> <span className='dropdown-text keep'>Cyber</span> </div> </div>
          <div className="pdf clean"> <div className='dropdown-line'> <AiFillGithub/> <span className='dropdown-text keep'>Clean</span> </div> </div>
          <div className="pdf warm">  <div className='dropdown-line'> <MdEmail/> <span className='dropdown-text keep'>Dark</span> </div>  </div>
        </div>
      </div>
    )
  }
}

export default Dropdown
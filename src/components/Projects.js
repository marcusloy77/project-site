import chatterbox from '../images/chatterbox.png'

import pcBuild2 from '../images/pc-build.png'
import movieCountdown from '../images/movie-countdown.png'
import streetFighter from '../images/street-fighter.png'

import { IoLogoReact } from 'react-icons/io5'
import { DiJavascript } from 'react-icons/di'
import { BsBootstrapFill } from 'react-icons/bs'
import { SiExpress, SiPostgresql} from 'react-icons/si'
import { GoRuby } from 'react-icons/go'
import { FaRedhat, FaCss3Alt } from 'react-icons/fa'

import { AiFillGithub, AiOutlineDeploymentUnit } from 'react-icons/ai'
import './Projects.css'


const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <div className="proj-left-col">
          <h3 className="proj-title">ChatterBox</h3>
          <p className="proj-date">6 July, 2022</p>
          <p className="proj-desc">Full stack messaging app, with login/register, friendlists, message history, a user search engine and unique usernames.</p>

          <p className="proj-tech-stack"> <IoLogoReact/> React, <DiJavascript/> Javascript, <SiExpress/> Express, <SiPostgresql/> PSQL, <FaCss3Alt/> CSS</p>

          <div className="links"> <a className="appLink" href="https://github.com/marcusloy77/ChatterBox" target="_blank" rel="noreferrer"><AiFillGithub/> Github</a> <a className="appLink" href="https://chatterbox-message-app.herokuapp.com/" target="_blank" rel="noreferrer"><AiOutlineDeploymentUnit/> Demo</a></div>
        </div>
        <div></div>
        <div className="demoImg">
          <a href="https://chatterbox-message-app.herokuapp.com/" target="_blank" rel="noreferrer"><img className='projPic1' src={chatterbox} alt="application screenshot" /></a>
        </div>
      </div>
      <div className="project">
        <div className="proj-left-col">
          <h3 className="proj-title">PC Builder</h3>
          <p className="proj-date">11 June, 2022</p>
          <p className="proj-desc">Full stack PC building web app, with login/register, personal saved PC builds, and a large array of webscraped components using another one of my projects found <a className='appLink' href="https://github.com/marcusloy77/Pc-Parts-Web-Scraper" target="_blank" rel="noreferrer">here</a>.</p>
          <p className="proj-tech-stack"> <DiJavascript/> Javascript, <SiExpress/> Express, <SiPostgresql/> PSQL, <BsBootstrapFill/> Bootstrap, <FaCss3Alt/> CSS</p>
          <div className="links"> <a className="appLink" href="https://github.com/marcusloy77/PC-Builder" target="_blank" rel="noreferrer"><AiFillGithub/> Github</a> <a className="appLink" href="https://pc-builder-greatest.herokuapp.com/" target="_blank" rel="noreferrer"><AiOutlineDeploymentUnit/> Demo</a></div>
        </div>
        <div></div>
        <div className="demoImgBuild">
          
          <a href="https://pc-builder-greatest.herokuapp.com/" target="_blank" rel="noreferrer"><img className='projPic1' src={pcBuild2} alt="application screenshot" /></a>
        </div>
      </div>
      <div className="project">
        <div className="proj-left-col">
          <h3 className="proj-title">Movie Countdown</h3>
          <p className="proj-date">29 May, 2022</p>
          <p className="proj-desc">Full stack application movie database application, with the main feature being a countdown until said movie is released in theatres. Also includes a login and favourite system.</p>
          <p className="proj-tech-stack"><GoRuby/> Ruby, <FaRedhat/> Sinatra, <SiPostgresql/> PSQL, <FaCss3Alt/> CSS</p>
          <div className="links"> <a className="appLink" href="https://github.com/marcusloy77/movie-countdown" target="_blank" rel="noreferrer"><AiFillGithub/> Github</a> <a className="appLink" href="https://movie-countdown.herokuapp.com/" target="_blank" rel="noreferrer"><AiOutlineDeploymentUnit/> Demo</a></div>
        </div>
        <div></div>
        <div className="demoImg">
          <a href="https://movie-countdown.herokuapp.com//" target="_blank" rel="noreferrer"><img className='projPic1' src={movieCountdown} alt="application screenshot" /></a>
        </div>
      </div>
      <div className="project">
        <div className="proj-left-col">
          <h3 className="proj-title">Street Fighter: Tic Tac Toe</h3>
          <p className="proj-date">3 May, 2022</p>
          <p className="proj-desc">Retro spin on a classic playground game. My first ever web application, it took inspiration from games I played as a kid, including 'borrowed' custom animations and sounds.</p>
          <p className="proj-tech-stack"> <DiJavascript/> Javascript, <FaCss3Alt/> CSS</p>
          <div className="links"> <a className="appLink" href="https://github.com/marcusloy77/tic-tac-toe" target="_blank" rel="noreferrer"><AiFillGithub/> Github</a> <a className="appLink" href="https://marcusloy77.github.io/tic-tac-toe/" target="_blank" rel="noreferrer"><AiOutlineDeploymentUnit/> Demo</a></div>
        </div>
        <div></div>
        <div className="demoImg">
          <a href="https://marcusloy77.github.io/tic-tac-toe/" target="_blank" rel="noreferrer"><img className='projPic1' src={streetFighter} alt="application screenshot" /></a>
        </div>
      </div>


    </div>
  )
}

export default Projects
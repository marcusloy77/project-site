import './About.css'
import hawaii from '../images/hawaiiImg.png'

const About = () => {
  return (
    <div className="caro">
      <div className="writing-section">
      <h3 className='title'>About Me</h3>
          <img className='me' src={hawaii} alt="img" />
        <div className="right-col-about">
          
          <div className="cols">
            <div className="left-col-about-inner col">
              <h4 className='sub-title'>At Work</h4>
              <p>Motivated and always in need of a new challenge, I run at any opportunity to utilise my problem solving skills. I can spend hours immersed in problems obsessively moving towards new objectives, and I love variation and faster paced environments where I can learn more. I'm always keen to get feedback, and like to work within teams to properly isolate and solve issues from the lowest levels to highest ones.</p>
            </div>
            <div className="right-col-about-inner col">
              <h4 className='sub-title'>Outside of Work</h4>
              <p>I've long had a passion for the outdoors, and love to get hiking in my time off. Basketball and bouldering are my most recent sporting activities, but I'll try and get outside whenever I have the energy. When that fails, settling into the latest Marvel iteration or gaming helps me relax.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default About
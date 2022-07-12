import './About.css'
import prof from '../images/Prof.png'

const About = () => {
  return (
    <div className="caro">
      <div className="writing-section">
        <div className="left-col-about">
          <img className='me' src={prof} alt="img" />
        </div>
        <div className="right-col-about">
          <h3 className='title'>About Me</h3>
          <p></p>
          <div className="cols">
            <div className="left-col-about-inner col">
              <h4 className='sub-title'>At Work</h4>
              <p>Motivated and always in need of a new challenge, I run at any opportunity to utilise my problem solving skills. I can spend hours immersed in problems obsessively moving towards new objectives, and I love variation and faster paced environments where I can learn more. I'm always keen to get feedback, and like to work within teams to properly isolate and solve issues from the lowest levels to highest ones.</p>
            </div>
            <div className="right-col-about-inner col">
              <h4 className='sub-title'>Outside of Work</h4>
              <p>I've long had a passion for sports, both watching and playing. Basketball and bouldering are my most recent favourites, but I'll try and get outside whenever I have the energy. When that fails, settling into the latest Marvel iteration or gaming helps me relax.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default About
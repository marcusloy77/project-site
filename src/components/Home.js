import { MdEmail } from 'react-icons/md'

const Home = ({programmer}) => {
  return (
    <section className="contents">
      <section className="left-col">
        
        <div className="home-para">
          <h2 className="name">Marcus Loy</h2>
          <p className="description">I'm a Sydney based software engineer, and I have a passion for technical problem solving. Get in touch!</p>

          <a id="emailMe" href="mailto:marcus.loy.77@gmail.com"><div className='emailBtn'>  <div className='icon'><MdEmail/></div> <span className='emailBtnText'> Email</span></div></a>
        </div>

      </section>
      <section className='right-col'>
        <img className='programmer-img' src={programmer} alt="programmer at work" />
      </section>
      

    </section>
  )
}

export default Home
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import programmer from '../images/programmer.png'
import programmer2 from '../images/programmer2.png'

const Home = () => {

  const [contactForm, setContactForm] = useState(false)

  const setContact = () => {
    if (contactForm) {
      setContactForm(false)
    }
    else {
      setContactForm(true)
    }
  }

  const Contact = () => {
    if (contactForm) {
      return (
        <form action="">
          <TextField></TextField>
          <TextField></TextField>
        </form>
      )
    }
    else {
      return (<div></div>)
    }
  }

  return (
    <section className="contents">
      <section className="left-col">
        
        <div className="home-para">
          <h2 className="name">Marcus Loy</h2>
          <p className="description">I'm a Sydney based software engineer, and I have a passion for technical problem solving. Get in touch!</p>
          <Button variant='contained' onClick={setContact}>Get In Contact</Button>
          <Contact/>
        </div>

      </section>
      <section className='right-col'>
        <img className='programmer-img' src={programmer2} alt="" />
      </section>
      

    </section>
  )
}

export default Home
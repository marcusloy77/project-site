import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

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
        <h2 className="name">Marcus Loy</h2>
        <p className="description">I'm a Sydney based software engineer, and I have a passion for technical problem solving. Get in touch!</p>
        <Button variant='contained' onClick={setContact}>Get In Contact</Button>
        <Contact/>

      </section>
      <section className='right-col'></section>
      

    </section>
  )
}

export default Home
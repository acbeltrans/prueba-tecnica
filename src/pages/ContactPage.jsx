import { useState } from 'react'
import { Contact, NavBar, SideBar, Footer } from '../components'

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Contact />
      <Footer />
    </>
  )
}

export default ContactPage

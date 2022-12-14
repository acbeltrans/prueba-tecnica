import { useState } from 'react'
import { Services, NavBar, SideBar, Footer } from '../components'

export const ServicesPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Services />
      <Footer />
    </>
  )
}

export default ServicesPage

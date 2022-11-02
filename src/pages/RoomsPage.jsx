import { useState } from 'react'
import { Rooms, NavBar, SideBar, Footer } from '../components'

export const RoomsPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Rooms />
      <Footer />
    </>
  )
}

export default RoomsPage

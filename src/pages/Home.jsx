import { useState } from 'react'
import {
  MainSection,
  NavBar,
  SideBar,
  InfoSection,
  Footer,
} from '../components'

import { InfoOne } from '../data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <MainSection />
      <InfoSection {...InfoOne} />
      <Footer />
    </>
  )
}

export default Home

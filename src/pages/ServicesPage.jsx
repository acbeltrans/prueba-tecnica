import { Services } from '../components'

export const ServicesPage = () => {
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

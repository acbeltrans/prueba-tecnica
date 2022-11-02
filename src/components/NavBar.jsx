import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from '../styled/NavBar.styles'
import { animateScroll as scroll } from 'react-scroll'

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <Nav scrollNav={scrollNav}>
      <NavBarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          Movich Hoteles
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="acerca"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Acerca
            </NavLinks>
          </NavItem>
          <NavBtn>
            <NavBtnLink to="/habitaciones">Habitaciones</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/servicios">Servicios</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/contacto">Contacto</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavBarContainer>
    </Nav>
  )
}

export default NavBar

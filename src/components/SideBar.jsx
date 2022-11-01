import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from '../styled/SideBar.styles'

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="acerca" onClick={toggle}>
            Acerca
          </SideBarLink>
          <SideBarLink to="habitaciones" onClick={toggle}>
            Habitaciones
          </SideBarLink>
          <SideBarLink to="servicios" onClick={toggle}>
            Servicios
          </SideBarLink>
          <SideBarLink to="contacto" onClick={toggle}>
            Contacto
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar

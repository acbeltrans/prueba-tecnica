import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from '../styled/SideBar.styles'

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="acerca" onClick={toggle}>
            Acerca
          </SideBarLink>
          <SideBtnWrap>
            <SideBarRoute to="/habitaciones">Habitaciones</SideBarRoute>
          </SideBtnWrap>
          <SideBtnWrap>
            <SideBarRoute to="/servicios">Servicios</SideBarRoute>
          </SideBtnWrap>
          <SideBtnWrap>
            <SideBarRoute to="/contacto">Contacto</SideBarRoute>
          </SideBtnWrap>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar

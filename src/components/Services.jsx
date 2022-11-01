import Icon1 from '../assets/salon_1.jpg'
import Icon2 from '../assets/salon_2.jpeg'
import Icon3 from '../assets/salon_3.png'

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from '../styled/Services.styles'

const Services = () => {
  return (
    <ServicesContainer id="servicios">
      <ServicesH1>Conoce nuestros servicios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Servicio 1</ServicesH2>
          <ServicesP>Texto</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Servicio 2</ServicesH2>
          <ServicesP>Texto</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Servicio 3</ServicesH2>
          <ServicesP>Texto</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services

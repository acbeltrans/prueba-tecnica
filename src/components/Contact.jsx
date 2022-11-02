import { useEffect, useRef, ReactElement } from 'react'
import {
  MainContainer,
  Form,
  FormButton,
  FormContent,
  H1,
  FormInput,
  FormLabel,
  FormWrap,
  Container,
  MapContainer,
  PhoneInfo,
  EmailInfo,
  AddressInfo,
} from '../styled/Contact.styles'

const Contact = () => {
  return (
    <MainContainer>
      <H1>Contáctenos</H1>
      <Container>
        <MapContainer>
          <PhoneInfo>
            Teléfono: +57 (601) 521 5050 / +57 (601) 482 4466
          </PhoneInfo>
          <EmailInfo>Email: reservas@movichhotels.com</EmailInfo>
          <AddressInfo>
            Av El Dorado No 102 - 20. Centro empresarial Buró 26 - Piso 1,
            Bogotá, Colombia.
          </AddressInfo>
        </MapContainer>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <FormLabel>Nombre Completo</FormLabel>
              <FormInput type="text" required />
              <FormLabel>Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel>Asunto</FormLabel>
              <FormInput type="text" required />
              <FormLabel>Mensaje</FormLabel>
              <FormInput type="text" required />
              <FormButton type="submit">Enviar</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </MainContainer>
  )
}

export default Contact

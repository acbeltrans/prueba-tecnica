import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
  min-height: 692px;
  margin-top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: white;
`

export const Container = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
`

export const PhoneInfo = styled.p`
  margin: 0px 100px;
`

export const EmailInfo = styled.p`
  margin: 20px 100px;
`
export const AddressInfo = styled.p`
  margin: 20px 100px;
`

export const MapContainer = styled.p`
  flex-direction: column;
  justify-content: center;
`

export const FormWrap = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`
export const Icon = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #7c7953;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`
export const H1 = styled.h1`
  margin-bottom: 40px;
  color: black;
  font-size: 40px;
  font-weight: 900;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`
export const FormButton = styled.button`
  background: black;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`

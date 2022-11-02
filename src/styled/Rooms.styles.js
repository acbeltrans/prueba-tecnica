import styled from 'styled-components'

export const RoomsContainer = styled.div`
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #7c7953;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const RoomsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  grid-gap: 40px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 28px;
  }
`

export const RoomsCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: 10px 400px;
  grid-gap: 200px;
  border-radius: 10px;
  max-height: 340px;
  padding: 50px 200px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 1.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`

export const CardColumn1 = styled.div``

export const CardColumn2 = styled.div``

export const BtnWrapp = styled.div`
  margin: 0px 0px 30px 360px;
`

export const RoomsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
export const RoomsH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
export const RoomsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #7c7953;
  font-weight: 900;
  text-transform: uppercase;
`
export const RoomsT = styled.h2`
  font-size: 1rem;
  margin: 40px 0px 0px 0px;
  color: #7c7953;
  font-weight: 900;
  text-transform: uppercase;
`

export const RoomsP = styled.p`
  font-size: 1rem;
  text-align: center;
`

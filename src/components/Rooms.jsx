import { useState, useEffect } from 'react'
import Icon1 from '../assets/habitacion_1.jpg'
import Icon2 from '../assets/habitacion_2.png'
import Icon3 from '../assets/habitacion_3.jpg'
import { Button } from '../styled/Button.styles'

import {
  RoomsCard,
  RoomsContainer,
  RoomsH1,
  RoomsH2,
  RoomsIcon,
  RoomsP,
  RoomsWrapper,
  CardColumn1,
  CardColumn2,
  BtnWrapp,
  RoomsT,
} from '../styled/Rooms.styles'

const Rooms = () => {
  const price = 100
  const [totalPrice, setTotalPrice] = useState(price)
  const [nights, setNights] = useState(1)

  const handleTotalPrice = () => {
    let finalPrice = nights * price
    setTotalPrice(finalPrice)
  }

  const addNights = () => {
    setNights(nights + 1)
    handleTotalPrice()
  }

  const subNights = () => {
    if (nights > 0) {
      setNights(nights - 1)
    }
    handleTotalPrice()
  }

  return (
    <RoomsContainer id="habitaciones">
      <RoomsH1>Reserva ya tu habitación</RoomsH1>
      <RoomsWrapper>
        <RoomsCard>
          <CardColumn1>
            <RoomsIcon src={Icon1} />
            <RoomsH2>Sencilla</RoomsH2>
            <RoomsP>Precio: $100 </RoomsP>
          </CardColumn1>
          <CardColumn2>
            <RoomsT>Escoge el número de noches: {nights - 1} </RoomsT>

            <RoomsT>Precio total a pagar: {totalPrice} </RoomsT>
            <BtnWrapp>
              <Button onClick={addNights}>+</Button>
              <Button onClick={subNights}>-</Button>
            </BtnWrapp>
          </CardColumn2>
        </RoomsCard>
        <RoomsCard>
          <CardColumn1>
            <RoomsIcon src={Icon2} />
            <RoomsH2>Matrimonial</RoomsH2>
            <RoomsP>Precio: $100 </RoomsP>
          </CardColumn1>
          <CardColumn2>
            <RoomsT>Escoge el número de noches: {nights - 1} </RoomsT>

            <RoomsT>Precio total a pagar: {totalPrice} </RoomsT>
            <BtnWrapp>
              <Button onClick={addNights}>+</Button>
              <Button onClick={subNights}>-</Button>
            </BtnWrapp>
          </CardColumn2>
        </RoomsCard>
      </RoomsWrapper>
    </RoomsContainer>
  )
}

export default Rooms

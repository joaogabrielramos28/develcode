import React from 'react'
import {Container, Image} from './styles'
import Logo from '../../assets/logo.png'
const Header:React.FC = () => {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  )
}

export default Header
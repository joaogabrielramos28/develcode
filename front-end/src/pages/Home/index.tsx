import React from 'react'
import Header from '../../components/Header'
import UserForm from '../../components/UserForm'
import {Container} from './styles'
export const Home:React.FC = () => {
  return (
    <Container>
      <Header />

      <UserForm />
    </Container>
  )
}

export default Home
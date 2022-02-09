import React from 'react'
import Header from '../../components/Header'
import UserForm from '../../components/UserForm'
import UserList from '../../components/UserList'
import {Container} from './styles'
export const Home:React.FC = () => {
  return (
    <Container>
      <Header />

      <UserForm />

      <UserList />
    </Container>
  )
}

export default Home
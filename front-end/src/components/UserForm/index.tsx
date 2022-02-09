import React from 'react'
import { Container, Form,Input,Button  } from './styles'

const UserForm = () => {
  return (
    <Container>
      <Form>
       <Input placeholder="Nome" />
       <Input placeholder="Código" />
       <Input placeholder="Data de nascimento" />
       <Input placeholder="foto" type={'file'} />
       <Button>Criar</Button>
      </Form>
    </Container>
  )
}

export default UserForm
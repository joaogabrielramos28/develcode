import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import UserCard from '../UserCard'
import {Container} from './styles'

interface UserDataProps{
  id:number;
  code:string;
  name:string;
  birthday:string;
  photo:String;
}

const UserList = () => {
  const [users,setUsers] = useState<UserDataProps[]>()

  useEffect(()=>{
    api.get("/").then((response)=>{
      setUsers(response.data)
    })
  },[])

  
  return (
    <Container>
      {users?.map((user)=>(
        <UserCard key={user.id} name={user.name} code={user.code} birthday={user.birthday} photo={user.photo} id={user.id}
         />
      ))}
        
        
        
    </Container>
  )
}

export default UserList
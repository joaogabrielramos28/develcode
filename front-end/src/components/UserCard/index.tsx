import React from "react";
import {
  Container,
  UserImage,
  UserCode,
  UserName,
  UserBirth,
  Action,
  Edit,
} from "./styles";

interface UserProps{
  id:number;
  code:string;
  name:string;
  birthday:string;
  photo:String;
}


const UserCard = ({id,code,name,birthday,photo}:UserProps) => {
  return (
    <Container>
      <Action>
        <Edit />
      </Action>
      <UserImage src={`http://localhost:3333/uploads/${photo}`} />
      <UserCode>{code}</UserCode>
      <UserName>{name}</UserName>
      <UserBirth>{birthday}</UserBirth>
    </Container>
  );
};

export default UserCard;

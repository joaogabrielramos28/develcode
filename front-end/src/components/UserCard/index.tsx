import React, { useRef, useState } from "react";
import api from "../../services/api";
import {
  Container,
  UserImage,
  UserCode,
  UserName,
  UserBirth,
  Action,
  Edit,
  Input,
  Button,
  ButtonFormContainer
} from "./styles";

interface UserProps {
  id: number;
  code: string;
  name: string;
  birthday: string;
  photo: String;
}

const UserCard = ({ id, code, name, birthday, photo }: UserProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null)
  const codeInputRef = useRef<HTMLInputElement>(null);
  const birthdayInputRef = useRef<HTMLInputElement>(null);
  function handleEditingModeOn() {
    setIsEditing(!isEditing);
  }

  function handleChangeUser() {
    const name = nameInputRef.current?.value
    const code = codeInputRef.current?.value
    const birthday = birthdayInputRef.current?.value

    const data = {
      name,code,birthday
    }

    try{
      api.put(`/edit/${id}`,data).then((response)=>{
        console.log(response.data);
        
      })
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <Container>
      <Action>
        <Edit onClick={handleEditingModeOn} />
      </Action>
      <UserImage src={`http://localhost:3333/uploads/${photo}`} />
      {isEditing ? (
        <>
        <form>
          <Input defaultValue={code} ref={codeInputRef} /> 
          <Input defaultValue={name} ref={nameInputRef} />
          <Input defaultValue={birthday} ref={birthdayInputRef} />
          <ButtonFormContainer>

          <Button onClick={handleChangeUser}>Enviar</Button>
          </ButtonFormContainer>
          </form>
        </>
      ) : (
        <>
          <UserCode>{code}</UserCode>
          <UserName>{name}</UserName>
          <UserBirth>{birthday}</UserBirth>
        </>
      )}
    </Container>
  );
};

export default UserCard;

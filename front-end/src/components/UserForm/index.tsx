import React, { FormEvent, useRef, useState } from "react";
import { Container, Form, Input, Button } from "./styles";
import api from "../../services/api";

const UserForm = () => {
  const [file,setFile] = useState('')
  const nameInputRef = useRef<HTMLInputElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);
  const birthdayInputRef = useRef<HTMLInputElement>(null);

  function onChangeInput (e:any) {
    const [file] = e.target.files
    
    setFile(file)
  }
  async function handleSubmit(e: FormEvent) {
    const formData = new FormData()

    formData.append('photo',file);
    formData.append('name',nameInputRef.current?.value || '');
    formData.append('code',codeInputRef.current?.value || '');
    formData.append('birthday',birthdayInputRef.current?.value || '');

    
    
    try {
      await api
        .post("/register", 
          formData,
        )
        .then((res) => {
          console.log(res);
          
        });
    } catch (err) {
      console.log(err);
    }
  }

 
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Nome" ref={nameInputRef} />
        <Input placeholder="Código" ref={codeInputRef} />
        <Input placeholder="Data de nascimento" ref={birthdayInputRef} />
        <Input
          placeholder="foto"
          type={"file"}
          onChange={onChangeInput}
        />
        <Button>Criar</Button>
      </Form>
    </Container>
  );
};

export default UserForm;

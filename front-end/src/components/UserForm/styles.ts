import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.primary};
`;

export const Form = styled.form`
  padding: 30px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 200px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  color:${({theme})=>theme.text};
  outline: none;
  margin: 0 10px;
`;

export const Button = styled.button`
    width:140px;
    padding:8px;
    color:${({theme})=>theme.shape};
    border-radius: 8px;
    outline: none;
    border:none;
    text-align: center;

    background-color:#007bff;
    cursor:pointer;
    margin-top:10px;
    &:hover{
        opacity: .6;
        transition:.7s ease;
    }
`;

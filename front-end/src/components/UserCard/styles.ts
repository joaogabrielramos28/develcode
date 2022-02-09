import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
export const Container = styled.div`
  padding: 8px 0;
  width: 180px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.text};
`;

export const UserImage = styled.img`
  width: 150px;
  border-radius: 50%;
  height: 150px;
  object-fit: cover;
`;
export const UserCode = styled.span`
  color: ${({ theme }) => theme.shape};
`;
export const UserName = styled.h2`
  color: ${({ theme }) => theme.shape};
  font-size: 1.2rem;
`;
export const UserBirth = styled.h3`
  color: ${({ theme }) => theme.shape};
  font-size: 0.9rem;
`;

export const Action = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 4px;
`;

export const Edit = styled(FaEdit)`
  font-size: 1rem;
  color: ${({ theme }) => theme.shape};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    transition: 0.7s ease;
  }
`;


export const Input = styled.input`
background-color:transparent;
  width:100%;
  padding: 8px;
  border:none;
  outline:none;
  border-bottom: 1px solid rgba(255,255,255,0.9);
  color:${({theme})=>theme.shape};
  outline: none;
  margin: 0 10px;
`;

export const Button = styled.button`
    width:100px;
    
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

export const ButtonFormContainer = styled.div`
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;

`


import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    background-color:${({theme})=>theme.shape};
    height:80px;
    padding:10px 20px;
`

export const Image = styled.img`
    width:100px;
    cursor:pointer;
`

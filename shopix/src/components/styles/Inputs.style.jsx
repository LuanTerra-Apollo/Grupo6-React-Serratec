import styled from 'styled-components'

export const InputBarraPesquisa = styled.input`
    width: 570px;
    height: 35px;
    

    border-radius: 15px;
    border: 1px solid #000;
    background-color: ${({theme}) => theme.colors.geralWhite};

    &:hover {
        background-color: white;
    }

    &::placeholder{
        font-size: large;
        padding: 10px;
    }
`

export const Input = styled.input`
    padding-left: 5px;
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    font-family: 'Inter';
    font-size: 24px;
    font-weight: bold;
    border-radius: 15px;
    background: ${({theme}) => theme.colors.inputGray};

    &::placeholder{
        color: #323232cc;
        font-size: 24px;
        font-family: 'Inter';
        font-weight: bold;
    }
`
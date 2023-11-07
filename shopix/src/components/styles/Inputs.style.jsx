import styled from 'styled-components'

export const InputBarraPesquisa = styled.input`
    width: 570px;
    height: 35px; 
    border: none;
    border-radius: 16px;
    background-color: ${({theme}) => theme.colors.geralWhite};
    padding: 0 20px 0 20px;
    font-size: 18px;
    &:hover {
        background-color: white;
    }

    &::placeholder{
        font-size: 18px;
    }

    &:focus{
        outline: none;
        border: none;
    }
`

export const Input = styled.input`
    padding-left: 10px;
    width: ${(prop) => prop.width};
    /* height: ${(prop) => prop.height}; */
    font-family: 'Inter';
    font-size: 24px;
    /* font-weight: bold; */
    border-radius: 15px;
    /* background: ${({theme}) => theme.colors.inputGray}; */
    background: #EBEBEB;
    outline: none;
    border: none;

    &::placeholder{
        color: #323232cc;
        font-size: 16px;
        font-family: 'Inter';
        /* font-weight: bold; */
    }
`
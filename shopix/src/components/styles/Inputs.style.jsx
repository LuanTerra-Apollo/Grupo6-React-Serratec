import styled from 'styled-components'

export const InputBarraPesquisa = styled.input`
    width: 570px;
    height: 41px;

    border-radius: 15px;
    border: 1px solid #000;
    background-color: ${({theme}) => theme.colors.geralWhite};

    &:hover {
        background-color: pink;
    }
`

export const Input = styled.input`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};

    border-radius: 15px;
    background: ${({theme}) => theme.colors.inputGray};
`
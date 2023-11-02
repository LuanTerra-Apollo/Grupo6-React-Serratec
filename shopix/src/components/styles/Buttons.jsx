import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColo : gray};
    width: ${({width}) => width ? width : "100px"};
    height: 60px;

    &:hover {
        background-color: pink;
    }
`
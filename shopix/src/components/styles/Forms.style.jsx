import styled from 'styled-components'

export const Form = styled.form`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    background-color: ${({theme}) => theme.colors.geralWhite};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

`
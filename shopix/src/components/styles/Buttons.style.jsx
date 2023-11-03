import styled from 'styled-components'

export const Button = styled.button`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    background-color: #1691B8;
    border-radius: 15px;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 24px;
    font-weight: bold;
`
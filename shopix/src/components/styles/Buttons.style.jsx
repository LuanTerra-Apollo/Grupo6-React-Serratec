import styled from 'styled-components'

export const Button = styled.button`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    background-color: #64298b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer; 
    font-size: 26px;
    box-shadow: -1px 1px 3px black;
    margin-top: 15px;

      &:hover {
    background-color: #9e42db;
    box-shadow: none;
  }
`
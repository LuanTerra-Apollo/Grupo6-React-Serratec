import styled from 'styled-components'

export const Button = styled.button`
    width: 150px;
    height: 50px;
    background-color: #64298b;
    color: white;
    border: none;
    margin: auto;
    border-radius: 5px;
    cursor: pointer; 
    font-size: 18px;
    box-shadow: -1px 1px 3px black;

      &:hover {
    background-color: #9e42db;
    box-shadow: none;
  }
`
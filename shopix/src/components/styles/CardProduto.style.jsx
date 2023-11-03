import styled from 'styled-components'

export const CardProduto = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    background-color: white;
`
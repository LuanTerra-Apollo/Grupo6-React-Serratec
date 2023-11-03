import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Buttons.style'

const CardProdutoStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    background-color: white;

    .divImagem {
      height: 94%;
      width: 59%;
      background-color: orange;
    }

    .divProduto {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      

      height: 94%;
      width: 33%;
      background-color: gray;

      h1{
        padding-left: 2%;
        padding-top: 2%;
      }

      p{
        padding: 2%
      }

      .botao {
        margin-left: 50%;
        transform: translate(-50%, -50%);
      }

      .quantidade {
        text-align: center;
        transform: translate(0, 90%)
      }
    }

    img {
      height: 4%;
      position: absolute;
      transform: translate(1170%, -870%)
    }
`

const CardProduto = () => {
  return (
    <CardProdutoStyled height='84%' width='92%'>
        <div className='divImagem'></div>
        <div className='divProduto'>
          <h1>Nome Produto</h1>
          <img src="https://i.imgur.com/mKjFPY5.png" alt="" />
          <h1>$$,$$</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias id, minus veniam quia ratione error magnam magni tempore, optio adipisci, autem numquam quas ipsam voluptas sed. Dolores, excepturi inventore?</p>
          <p className='quantidade'>Quantidade: <input type="number" /> unidade(s)</p> 
          <Button className='botao' height='10%' width='80%'>Adicionar ao Carrinho</Button>
        </div>
    </CardProdutoStyled>
  )
}

export default CardProduto

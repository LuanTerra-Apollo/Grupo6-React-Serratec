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
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .divImagem {
      height: 94%;
      width: 59%;
      background-color: #E06004;
      border-radius: 10px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .divProduto {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      padding-left: 8px;

      height: 94%;
      width: 33%;
      background-color: #A7A7A7;

      .divProdutoFavorito {
        display: flex;
        justify-content: space-between;
        padding: 30px;

        img {
          height: 35px;
          width: 35px;
          margin-left: 107px;
          -webkit-filter: drop-shadow(5px 5px 5px #222222cf);
          filter: drop-shadow(2px 3px 5px #222222cf);
        }
        p {
          margin-top: 4px;
        }
        
      }

      .divValorDescricao {
        margin-bottom: 300px;
        padding-left: 20px;
        padding-right: 20px;

        h1 {
          margin-bottom: 40px;
        }
      }

      .divQuantidadeBotao {
        .quantidade {
          text-align: left;
          font-size: 18px;
          margin-left: 30px;
          transform: translate(-0%, -290%);
        }
        .botao {
          margin-left: 50%;
          transform: translate(-50%, -50%);
          height: 75px;
          width: 400px;
          border: 0px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
      }     
    }

    input {
      width: 10%;
    }
`

const CardProduto = ({ produto, handleQuantidadeChange, handleAddCarrinho }) => {
  return (
    <CardProdutoStyled height='84%' width='72%'>
        <div className='divImagem'><img src={produto.imgurl} alt={produto.nome} /></div>
        <div className='divProduto'>
          <div className='divProdutoFavorito'>
            <h1>{produto.nome}</h1>
            <img src="https://i.imgur.com/mKjFPY5.png" alt="Favorito" />
            <p>(30)</p>
          </div>
          <div className='divValorDescricao'>
            <h1>{produto.preco}</h1>
            <p>{produto.descricao}</p>
          </div>
          <div className='divQuantidadeBotao'>
            <p className='quantidade'>Quantidade: <input type="number" onChange ={handleQuantidadeChange}  /> unidade(s)</p> 
            <Button className='botao' height='10%' width='80%' onClick={handleAddCarrinho}>Adicionar ao Carrinho</Button>
          </div>
        </div>
    </CardProdutoStyled>
  )
}

export default CardProduto

// onChange={() => {props.handleQuantidadeChange()}}

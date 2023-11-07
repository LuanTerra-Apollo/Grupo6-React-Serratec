import React from 'react'
import { Button } from '../styles/Buttons.style'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const ContainerPedidos = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5%;

    .ContainerPedido {
        width: 80%;
    }
`

const DescricaoPedido = styled.div`
    width: 100%;
    max-height: 40%;
    background-color: #64298b;
    color: white;
    border-radius: 8px 8px 0px 0px;
    padding: 10px;
    font-size: 18px;
    margin-top: 5%;


        .PrimeiraLinha {
            display: flex;
            margin-bottom: 12px;
            font-weight: bold;
            min-width: 100%;

            .StatusPedido {
                width: 25%;
            }

            .Total {
                width: 15%;
                text-align: start;
            }

            .CodigoPedido {
                width: 73%;
                text-align: end;
                
            }
        }
        
        .SegundaLinha {
            display: flex;

            .DataPedido {
                width: 22.3%;
            }

            .ValorTotal {
                width: 15%;
            }   
        }
`
const ProdutoImg = styled.div`
    padding: 6px;
    margin-right: 15px;
    min-width: 150px;
    max-width: 150px;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;


const CardProdutoPedido = styled.div`
    padding: 12px;
    height: 130px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px #8f8f8f;
    border-radius: 0 0 6px 6px;
    display: flex;
    justify-content: space-between;
    

    .divImagem {
        width: 6rem;
        height: 6rem;
        background-color: #E06004;
        border-radius: 8px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    }

    .CardProduto {
        width: 80%;
        margin-left: 10px;
        font-size: 18px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .CardTexto {
            width: 80%;
            padding-left: 15px;
            overflow: hidden;

            h3 {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-bottom: 1rem;
            }
        }

    }

    .DivBotao {
        height: 6rem;
        display: flex;
        justify-content: center;
        width: 8rem;


        .BotaoProduto {
            padding: 0px;
            margin: 0px;
            width: 6rem;
            height: 6rem;
            font-size: 18px;
            background-color: #471796;
            border: 0px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
    }

    .divFavorito {
        margin-left: 62%;
        button {
            border: 0px;
            background-color: #D9D9D9;
        }

        img {
            width: 40px;
            cursor: pointer;
            -webkit-filter: drop-shadow(5px 5px 5px #222222cf);
            filter: drop-shadow(2px 3px 5px #222222cf);
        }
    }
`

const ListaPedidos = ({pedidos}) => {
    const navigate = useNavigate()

    const comprarNovamente = (item) => {
        navigate(`/produto/${item.id}`)
    }

    return (
        <> 
            <ContainerPedidos>
                {pedidos.map((pedido, idx) => (
                    <div className='ContainerPedido' key={idx}>
                        <DescricaoPedido>
                            <div className='PrimeiraLinha'>
                                <p className='StatusPedido'>Pedido Realizado</p>
                                <p className='Total'>Total</p>
                                <p className='CodigoPedido'>Pedido #{pedido.id}</p>
                            </div>
                            <div className='SegundaLinha'>
                                <p className='DataPedido'>{pedido.dataPedido}</p>
                                <p className='ValorTotal'>R$ {parseFloat(pedido.valorTotal).toFixed(2)}</p>
                            </div>
                        </DescricaoPedido> 
                        {pedido.itens.map((item, produtoidx) => (
                            <CardProdutoPedido key={produtoidx}>
                                    <ProdutoImg>
                                        <img src={item.imgurl} alt="" />
                                    </ProdutoImg>
                                <div className='CardProduto'>
                                    <div className='CardTexto'>
                                        <h3>{item.nome}:</h3>
                                        <h4>Quantidade comprada: {item.quantidade}</h4>
                                    </div>
                                </div>
                                <Button className='BotaoProduto' onClick={() =>{comprarNovamente(item)}}> comprar novamente </Button>
                            </CardProdutoPedido>
                        ))}
                    </div>
                ))}
            </ContainerPedidos>
        </>
    )
}

export default ListaPedidos
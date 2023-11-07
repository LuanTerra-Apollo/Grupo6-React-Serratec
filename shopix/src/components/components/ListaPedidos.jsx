import React from 'react'
import { Button } from '../styles/Buttons.style'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    background-color: #9C9C9C;
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

    /* @media (max-width: 1280px) {
        .PrimeiraLinha {
        display: flex;
        margin-bottom: 12px;
        font-weight: bold;

            .StatusPedido {
                width: 20%;
            }

            .Total {
                margin-left: 60px;
            }

            .CodigoPedido {
                margin-left: 70%;
                
            }
        }
        
        .SegundaLinha {
        display: flex;

            .DataPedido {
                width: 20%;
            }

            .ValorTotal {
                margin-left: 0px;
            }   
        }
    }

    @media (max-width: 854px) {
        font-size: 16px;

        .PrimeiraLinha {
            display: flex;
            margin-bottom: 12px;
            font-weight: bold;

            .StatusPedido {
                width: 25%;
            }

            .Total {
                margin-left: 0px;
            }

            .CodigoPedido {
                margin-left: 80%;
            }
        }
        
        .SegundaLinha {
            display: flex;

            .DataPedido {
                width: 25%;
            }

            .ValorTotal {
                margin-left: 0px;
            }   
        }
    } */

`

const CardProdutoPedido = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 10rem;
    max-height: 50%;
    background-color: #ffffff;
    border-radius: 0px 0px 8px 8px;
    padding: 10px ;
    box-shadow: 2px 4px 8px #8f8f8f;
    margin-top: -3px;
    

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
        
        img {
            object-fit: contain;
            width: 6rem;
            max-height: 60px;
            height: 100%;
        }

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

    /* @media (max-width: 1280px) {
        .divImagem {
        width: 12%;
        }

        .CardProduto {
            width: 22%;
            margin-bottom: 4%;
            
            .BotaoProduto {
                font-size: 20px;
                height: 28px;
            }

        }

        .divFavorito {
            margin-left: 60%;

            img {
                width: 35px;
            }
        }
    }

    @media (max-width: 854px) {
        .divImagem {
            width: 20%;
            height: 100%;
        }

        .CardProduto {
            width: 35%;
            font-size: 14px;
            margin-bottom: 3%;
            
            .BotaoProduto {
                margin-top: 10px;
                width: 100%;
                font-size: 16px;
                height: 24px;
            }

        }

        .divFavorito {
            margin-left: 60%;
            margin-right: 5px;
            img {
                width: 25px;
                cursor: pointer;
                -webkit-filter: drop-shadow(5px 5px 5px #222222cf);
                filter: drop-shadow(2px 3px 5px #222222cf);
            }
        }
    } */
`

const ListaPedidos = ({pedidos}) => {

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
                                <div className='CardProduto'>
                                    <img src={item.imgurl} alt="" />
                                    <div className='CardTexto'>
                                        <h3>{item.nome}:</h3>
                                        <h4>Quantidade comprada: {item.quantidade}</h4>
                                    </div>
                                </div>
                                
                                <div className='DivBotao'>
                                    <Link to={`/produto/${item.id}`}><Button className='BotaoProduto'> comprar novamente </Button></Link>
                                </div>
                            </CardProdutoPedido>
                        ))}
                    </div>
                ))}
            </ContainerPedidos>
        </>
    )
}

export default ListaPedidos
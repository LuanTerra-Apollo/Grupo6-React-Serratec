import React from 'react'
import { Button } from '../styles/Buttons.style'
import styled from 'styled-components'

const ContainerPedido = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const DescricaoPedido = styled.div`
    width: 80%;
    background-color: #9C9C9C;
    border-radius: 8px 8px 0px 0px;
    padding: 10px;
    font-size: 18px;

        .PrimeiraLinha {
            display: flex;
            margin-bottom: 12px;
            font-weight: bold;

            .StatusPedido {
                width: 10%;
            }

            .Total {
                margin-left: 60px;
            }

            .CodigoPedido {
                margin-left: 77%;
                
            }
        }
        
        .SegundaLinha {
            display: flex;

            .DataPedido {
                width: 10%;
            }

            .ValorTotal {
                margin-left: 60px;
            }   
        }

    @media (max-width: 1280px) {
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
                margin-left: 57%;
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
    }

`

const CardProdutoPedido = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 20%;
    background-color: #D9D9D9;
    border-radius: 0px 0px 8px 8px;
    padding: 10px ;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .divImagem {
        width: 13%;
        height: 95%;
        background-color: #E06004;
        border-radius: 8px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .CardProduto {
        width: 20%;
        margin-left: 10px;
        font-size: 18px;
        margin-bottom: 7%;
        
        .BotaoProduto {
            margin-top: 15px;
            width: 100%;
            font-size: 24px;
            background-color: #471796;
            border: 0px;
            height: 32px;
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

    @media (max-width: 1280px) {
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
    }
`

const ListaPedidos = ({pedidos}) => {
    return (
        <> 
            <ContainerPedido>
                {pedidos.map((pedido, idx) => {
                    <DescricaoPedido key={idx}>
                        <div className='PrimeiraLinha'>
                            <p className='StatusPedido'>Pedido Realizado</p>
                            <p className='Total'>Total</p>
                            <p className='CodigoPedido'>Pedido #{pedido.id}</p>
                        </div>
                        <div className='SegundaLinha'>
                            <p className='DataPedido'>{pedido.dataPedido}</p>
                            <p className='ValorTotal'>R$ {pedido.valorTotal}</p>
                        </div>
                    </DescricaoPedido> 
                    {pedidos.itens.map((item, idx) => {
                        <CardProdutoPedido key={idx}>
                            <div className='divImagem'>
                                <img src={item.imgurl} alt="" />
                            </div>
                            <div className='CardProduto'>
                                <h3>{item.nome}:</h3>
                                <h4>{item.quantidade}</h4>
                                <Button className='BotaoProduto'> comprar novamente </Button>
                            </div>
                            {/* <div className='divFavorito'><button><img src="https://i.imgur.com/mKjFPY5.png" alt="" /></button></div> */}
                        </CardProdutoPedido>
                    })}
                })}
            </ContainerPedido>
        </>
    )
}

export default ListaPedidos

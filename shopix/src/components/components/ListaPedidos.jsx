import React from 'react'
import { Button } from '../styles/Buttons.style'
import styled from 'styled-components'

const DescricaoPedido = styled.div`

`

const CardProdutoPedido = styled.div`

`

const ListaPedidos = (props) => {
    return (
        <>
            <DescricaoPedido>
                <h1>Pedido</h1>
                <p>Total</p>
                <p>Pedido #224</p>
                <p>dd/MM/YYYY</p>
                <p>R$ $$,$$</p>
            </DescricaoPedido>
            <CardProdutoPedido>
                <div className='divImagem'></div>
                <div className='CardProduto'>
                    <h3>Nome Produto:</h3>
                    <Button> comprar novamente </Button>
                </div>
                <div className='divFavorito'><button><img src="https://i.imgur.com/mKjFPY5.png" alt="" /></button></div>
            </CardProdutoPedido>
        </>
    )
}

export default ListaPedidos

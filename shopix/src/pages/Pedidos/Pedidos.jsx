import { useEffect, useState } from "react"
import ListaPedidos from "../../components/components/ListaPedidos"
import Footer from "../../components/components/footer/Footer"
import Navibar from "../../components/components/navibar/Navibar"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { api } from "../../api/api"

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([])
    const [produtosPedido, setProdutosPedido] = useState([])

    const userId = JSON.parse(localStorage.getItem('user_id')).id;

    useEffect(() => {
        handleCarregarPedidos()
        handleCarregarProdutosPedido()
    }, [])

    const handleCarregarPedidos = async () => {
        const response = await api.get('/pedidos')

        
        const pedidosDoUsuario = response.data.map((pedido) => {
            if (pedido.idUser === userId){
                return pedido
            }
        })

        console.log(pedidosDoUsuario)

        setPedidos(pedidosDoUsuario)

        console.log(pedidos)
    }

    const handleCarregarProdutosPedido = async () => {
        const response = await api.get('/produtos')

        const produtosDoPedido = response.data.map((produto) => {
            if (pedidos.forEach(({item}) => item.idProduto == produto.id)) {
                return produto
            }
        })

        console.log(produtosDoPedido)
        
        setProdutosPedido(produtosDoPedido)

        console.log(produtosPedido)
    }

    return (
        <Wrapper>
            <Navibar/>
                <ListaPedidos pedidos={pedidos} produtosPedido={produtosPedido} />
            <Footer/>            
        </Wrapper>
    )
}

export default Pedidos
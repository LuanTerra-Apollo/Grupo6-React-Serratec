
import { useEffect, useState } from "react"
import ListaPedidos from "../../components/components/ListaPedidos"
import Footer from "../../components/components/footer/Footer"
import Navbar from "../../components/components/Navbar/Navbar"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { api } from "../../api/api"

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([])
    const userId = JSON.parse(localStorage.getItem('user_id')).id;

    useEffect(() => {
        if(!localStorage.user_id) {
            navigate('/login')
        }

        handleCarregarPedidos()
    }, [])

    const handleCarregarPedidos = async () => {
        const responsePedidos = await api.get('/pedidos')
        const responseProdutos = await api.get('/produtos')
            
        const pedidosDoUsuario = responsePedidos.data.filter((pedido) => {
            if (pedido.idUser === userId){
                return pedido
            }
        })

        const pedidosAtualizados = pedidosDoUsuario.map((pedido) => {

            const itensAtualizados = pedido.itens.map((item) => {
                const response = handleCarregarProduto(responseProdutos.data, item)
                return response

            })

            pedido.itens = itensAtualizados
            return pedido
        })
        
        setPedidos(pedidosAtualizados)
    }

    const handleCarregarProduto = (produtos, item) => {
        
        let produtoEncontrado = {}


        produtos.map(produto => {
            if (produto.id === item.idProduto) {
                const itemAtualizado = {
                    nome: produto.nome,
                    imgurl: produto.imgurl,
                    quantidade: item.quantidade,
                    id: produto.id
                }

                produtoEncontrado = itemAtualizado
            }
        })
        return produtoEncontrado
    }
    
    return (
        <Wrapper>
            <Navbar/>
                <ListaPedidos pedidos={pedidos} />
            <Footer/>            
        </Wrapper>
    )
}

export default Pedidos
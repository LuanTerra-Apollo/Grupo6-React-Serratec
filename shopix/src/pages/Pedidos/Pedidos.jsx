import { useEffect, useState } from "react"
import ListaPedidos from "../../components/components/ListaPedidos"
import Footer from "../../components/components/footer/Footer"
import Navibar from "../../components/components/navibar/Navibar"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { api } from "../../api/api"

const Pedidos = () => {
    const [pedidos, setPedidos] = useState({})

    const userId = JSON.parse(localStorage.getItem('user_id')).id;

    useEffect(() => {
        handleCarregarPedidos()
    }, [])

    const handleCarregarPedidos = async () => {
        const response = await api.get('/pedidos')

        const pedidosDoUsuario = []
        response.data.forEach((pedido) => {
            if (pedido.idUser === userId){
                pedidosDoUsuario.push(pedido)
            }
        })

    setPedidos(pedidosDoUsuario)
    }

    return (
        <Wrapper>
            <Navibar/>
                <ListaPedidos pedidos={pedidos} />
            <Footer/>            
        </Wrapper>
    )
}

export default Pedidos
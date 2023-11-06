import { useNavigate } from "react-router-dom"
import ListaPedidos from "../../components/components/ListaPedidos"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { useEffect } from "react"


const Pedidos = () => {
    const navigate = useNavigate()

    useEffect(() => {

        if(!localStorage.user_id) {
            navigate('/login')
        }
    },[])



    return (
        <Wrapper>
            <ListaPedidos />            
        </Wrapper>
    )
}

export default Pedidos
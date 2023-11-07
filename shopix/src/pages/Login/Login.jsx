import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState, } from 'react'
import { api } from '../../api/api'
import { Wrapper } from "../../components/styles/Wrapper.style"
import { FormLogin } from "../../components/styles/Login.style"
import Navibar from "../../components/components/navibar/Navibar"
import { LoginContext } from "../../context/LoginContext"
import Footer from "../../components/components/footer/Footer"

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { setUser, user } = useContext(LoginContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.user_id) {
            navigate('/')
        }

    }, [])

    const handleLogin = async (email, senha) => {
        const response = await api.get('/users', {params: {email, senha}})
        if(response.data.length == 1) {
            alert("Usuário logado com sucesso!")
            localStorage.setItem('user_id', JSON.stringify({ id: response.data[0].id }))
            setUser({ id: response.data[0].id, nome: response.data[0].nome, email: response.data[0].email, senha: response.data[0].senha})
            
            navigate('/')
        } else {
            alert("Usuário ou senha incorretos")
        }
    }

   
    return (
        <Wrapper>
            <Navibar/>
                <FormLogin handleLogin={handleLogin} email={email} setEmail={setEmail} senha={senha} setSenha={setSenha} />
            <Footer />
        </Wrapper>
    )
}

export default Login
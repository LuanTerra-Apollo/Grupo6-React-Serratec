import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, } from 'react'
import { api } from '../../api/api'
import { Input } from '../../components/styles/Inputs.style'
import { Wrapper } from "../../components/styles/Wrapper.style"
import { FormLogin } from "../../components/styles/Login.style"
import { Button } from "../../components/styles/Buttons.style"
import Navibar from "../../components/components/navibar/Navibar"
import { LoginContext } from "../../context/LoginContext"
import Footer from "../../components/components/footer/Footer"

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()
    const {login, setLogin, setUser, user} = useContext(LoginContext)

    const handleLimpar = () => {
        setEmail(''),
        setSenha('')
    }

    const handleLogin = async (email, senha) => {
        const response = await api.get('/users', {params: {email, senha}})
        console.log(email)
        console.log(senha)
        console.log(response.data)
        if(response.data.length == 1) {
            alert("Usuário logado com sucesso!")
            localStorage.setItem('user_id', JSON.stringify({ id: response.data[0].id }))
            setLogin(true)
            setUser({ id: response.data[0].id, nome: response.data[0].nome, email: response.data[0].email, senha: response.data[0].senha})
            console.log(user)
            navigate('/')
        } else {
            alert("Usuário ou senha incorretos")
        }
        handleLimpar()
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
import { Link } from "react-router-dom"
import { useState, } from 'react'
import { api } from '../../api/api'
import { InputBarraPesquisa } from "../../components/styles/Inputs"

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')



    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(email)
        console.log(senha)
        alert("botão funcionando")
        const response = await api.get('/users', {params: {email, senha}})
        console.log(response.data)
        if(response.data.length == 1) {
            alert("Usuário logado com sucesso!")
        } else {
            alert("Usuário ou senha incorretos")
        }
    }

    return (
        <>
        {email}
        <form className='formLogin' onSubmit={handleLogin}>
            <h1>Login</h1>
            <input type="text" onChange={(e) => { setEmail(e.target.value)}} placeholder='email' /> <br />
            <input type="text" onChange={(e) => { setSenha(e.target.value)}} placeholder='senha'  /> <br />
            <button type='submit'>Entrar</button> <br />
            <Link to={'/cadastro'} >Cadastre-se</Link>
        </form>
        <br />
        </>
    )
}

export default Login
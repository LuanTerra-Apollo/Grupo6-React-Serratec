import { Link } from "react-router-dom"
import { useState, } from 'react'
import { api } from '../../api/api'

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleLimpar = () => {
        setEmail(''),
        setSenha('')
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await api.get('/users', {params: {email, senha}})
        console.log(response.data)
        if(response.data.length == 1) {
            alert("Usuário logado com sucesso!")
        } else {
            alert("Usuário ou senha incorretos")
        }
        handleLimpar()
    }

    return (
        <>
        <form className='formLogin' onSubmit={handleLogin}>
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value)}} placeholder='email' /> <br />
            <input type="text" value={senha} onChange={(e) => { setSenha(e.target.value)}} placeholder='senha'  /> <br />
            <button type='submit'>Entrar</button> <br />
            <Link to={'/cadastro'} >Cadastre-se</Link>
        </form>
        </>
    )
}

export default Login
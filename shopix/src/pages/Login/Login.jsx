import { Link } from "react-router-dom"
import { useState, } from 'react'
import { api } from '../../api/api'
import { Input } from '../../components/styles/Inputs.style'
import { Wrapper } from "../../components/styles/Wrapper.style"
import { Form } from "../../components/styles/Forms.style"
import { Button } from "../../components/styles/Buttons.style"

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
        <Wrapper>
            <Form width='31%' height='55%' className='formLogin' onSubmit={handleLogin}>
                <h1 style={{fontSize: '60px', marginTop: '24px', marginBottom:'60px'}}>Login</h1>
                <Input style={{marginBottom:'-36px'}} width='86%' height='8%' type="text" value={email} onChange={(e) => { setEmail(e.target.value)}} placeholder='email' /> <br />
                <Input width='86%' height='8%' type="text" value={senha} onChange={(e) => { setSenha(e.target.value)}} placeholder='senha'  /> <br />
                <Button width='48%' height='13%' type='submit'>Entrar</Button> <br />
                <Link style={{color: "#007094", fontWeight: 'bold', fontSize:'150%', position: 'absolute', bottom: '24%'}} to={'/cadastro'} >Cadastre-se</Link>
            </Form>
        </Wrapper>
        <br />
        </>
    )
}

export default Login
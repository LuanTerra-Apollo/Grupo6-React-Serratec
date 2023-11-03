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
            <Form width='449px' height='563px' className='formLogin' onSubmit={handleLogin}>
                <h1 style={{fontSize: '60px', marginTop: '24px', marginBottom:'60px'}}>Login</h1>
                <Input style={{marginBottom:'-36px'}} width='385px' height='43px' type="text" value={email} onChange={(e) => { setEmail(e.target.value)}} placeholder='email' /> <br />
                <Input width='385px' height='43px' type="text" value={senha} onChange={(e) => { setSenha(e.target.value)}} placeholder='senha'  /> <br />
                <Button width='215px' height='70px' type='submit'>Entrar</Button> <br />
                <Link style={{color: "#007094", fontWeight: 'bold', fontSize:'24px', position: 'absolute', transform: 'translate(0%, 850%)'}} to={'/cadastro'} >Cadastre-se</Link>
            </Form>
        </Wrapper>
        <br />
        </>
    )
}

export default Login
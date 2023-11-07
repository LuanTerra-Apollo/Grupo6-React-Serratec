import styled from 'styled-components'
import { Input } from './Inputs.style'
import { Link } from 'react-router-dom'
import { Button } from './Buttons.style'
import { useEffect, useState } from 'react'

const LoginContainer = styled.div`

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #EBEBEB;
`

const FormLoginStyled = styled.form`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    min-height: 30rem;
    max-height: 30rem;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgb(97, 96, 96);

    h1 {
        font-size: 60px;
        text-shadow: -4px 3px 4px #8d8d8d;;
        /* margin-top: 24px;
        margin-bottom: 60px; */
    }

    .divImagem {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        

        .ImagemLogin {
            width: 80%;
            height: 100%;
            padding: 20px 0px 20px 0px;
        }
    }

    .Cadastre-se {
        color: #007094;
        font-size: 20px;
    }
    
    @media (max-width: 1280px) {
        min-width: 360px;
        min-height: 400px;

        .InputLogin {
            margin-bottom: 16px
        }
    }
    @media (max-width: 854px) {
        min-width: 240px;
        min-height: 320px;

        h1 {
            font-size: 48px;
            margin-top: 24px;
            margin-bottom: 36px;
        }

        .BotaoLogin {
            margin-bottom: 10px;
            font-size: 20px;
        }

        .Cadastre-se {
            font-size: 16px;
        }

        .InputLogin {
        margin-bottom: 0px
        }

        input {
            font-size: 16px;

            &::placeholder{
                font-size: 16px;
            }
        }
    }

`

export const FormLogin = (props) => {
    const [email, setEmail] = useState(props.email)
    const [senha, setSenha] = useState(props.senha)

    const handleSubmit = (e) => {
        e.preventDefault()

        props.handleLogin(email, senha)
    }

    // useEffect(() => {alert("fsdfsdf")},[handleLogin(email, senha)])

    
    return (
        <LoginContainer>
            <FormLoginStyled width='55%' height='50%' className='formLogin' onSubmit={handleSubmit}>

                <div className='divImagem'>
                    <img className='ImagemLogin'src="https://educationtribe.in/wp-content/uploads/2020/11/Digital-Marketing.png" alt="" style={{objectFit: "contain"}}/>
                </div>

                <div style={{width: "65%", marginRight: "20px"}}>
                    <div style={{width: "100%", marginBottom: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h1 style={{margin: "0px 0 40px 0"}}>Login</h1>
                        <Input className="InputLogin" width='90%' height='8%' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='email' required='required' /> <br />
                        <Input width='90%' height='8%' type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}} placeholder='senha' required='required' /> <br />
                    </div>

                    <div style={{width: "100%", marginBottom: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Button className="BotaoLogin" width='90%' height='13%' type='submit'>Entrar</Button> <br />
                        <p>Não possui uma conta?  <Link className="Cadastre-se" to={'/cadastro'} >Cadastre-se</Link></p>
                    </div>
                </div>
                
            </FormLoginStyled>
        </LoginContainer>
    )
}
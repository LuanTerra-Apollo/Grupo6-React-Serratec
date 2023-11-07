import styled from 'styled-components'
import { Input } from './Inputs.style'
import { Link } from 'react-router-dom'
import { Button } from './Buttons.style'
import { useState } from 'react'
import imgLogin from "./../../img/login4.jpg"

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
    max-width: 70%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgb(97, 96, 96);

    h1 {
        font-size: 60px;
        text-shadow: -4px 3px 2px #8d8d8d;
    }

    .formLogin{
        width: 65%;
        margin-right: 20px;
        display: flex;
        padding: 44px 0 44px 0;
        flex-direction: column;
        justify-content: space-around;
        align-items: none;
    }

    .divImagem {
        width: 100%;
        height: 100%;

        .ImagemLogin {
            width: 100%;
            height: 100%;
            padding: 8px;
 
        }
    }

            .DivBotoes {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .BotaoCadastrar {
                height: 100%;
                width: 90%;
                border: 0px;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                font-size: 24px;
            }

            .Cadastre-se {
                font-size: 18px;
                color: #007094;
                margin: 0;

                &:hover{
                    color: #049bce;
                }
            }
        }
    
    @media (max-width: 1280px) {
        min-width: 360px;
        min-height: 400px;

        .InputLogin {
            /* margin-bottom: 16px */
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
    
    return (
        <LoginContainer> 
            <FormLoginStyled width='55%' height='50%' className='formLogin' onSubmit={handleSubmit}>

                <div className='divImagem'>
                    <img className='ImagemLogin'src={imgLogin} alt="" style={{objectFit: 'cover'}} />
                </div>

                <div className='formLogin'>
                    <h1 style={{margin: "0px 0 30px 0", textAlign: "center", fontSize: "55px"}}>Login</h1>
                    <div style={{width: "100%", marginBottom: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Input className="InputLogin" width='90%' height='8%' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='email' required='required' /> <br />
                        <Input width='90%' height='8%' type="password" value={senha} onChange={(e) => {setSenha(e.target.value)}} placeholder='senha' required='required' /> <br />
                    </div>

                    <div className='DivBotoes'>
                        <Button className='BotaoCadastrar' type='submit'>Entrar</Button> <br />
                        <p>Não possui uma conta?  <Link className="Cadastre-se" to={'/cadastro'} >Cadastre-se</Link></p>
                    </div>
                </div>
                
            </FormLoginStyled>
        </LoginContainer>
    )
}
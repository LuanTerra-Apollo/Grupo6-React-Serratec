import styled from 'styled-components'
import { Input } from './Inputs.style'
import { Link } from 'react-router-dom'
import { Button } from './Buttons.style'
import { useState } from 'react'

const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const FormLoginStyled = styled.form`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    min-width: 480px;
    min-height: 560px;
    background-color: ${({theme}) => theme.colors.geralWhite};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    h1 {
        font-size: 60px;
        margin-top: 24px;
        margin-bottom: 60px;
    }

    .Cadastre-se {
        /* position: absolute;
        transform: translate(0%, 870%); */
        color: #007094;
        font-weight: bold;
        font-size: 150%;
    }

    .InputLogin {
        margin-bottom: -36px
    }
    
    @media (max-width: 1280px) {
        min-width: 360px;
        min-height: 400px;

        .Cadastre-se {
        /* position: absolute;
        transform: translate(0%, 650%) */
        }

        .InputLogin {
            margin-bottom: -16px
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
            /* position: absolute;
            transform: translate(0%, 740%) */
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
        e.preventDefault();
    
        // Passa o e-mail e a senha para a página de login
        props.handleLogin(email, senha);
      };
    
    return (
        <LoginContainer>
            <FormLoginStyled width='25%' height='50%' className='formLogin' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Input className="InputLogin" width='86%' height='8%' type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='email' required='required' /> <br />
                <Input width='86%' height='8%' type="text" value={senha} onChange={(e) => {setSenha(e.target.value)}} placeholder='senha' required='required' /> <br />
                <Button className="BotaoLogin" width='48%' height='13%' type='submit'>Entrar</Button> <br />
                <Link className="Cadastre-se" to={'/cadastro'} >Cadastre-se</Link>
            </FormLoginStyled>
        </LoginContainer>
    )
}

export const Form = styled.form`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    min-width: 480px;
    min-height: 560px;
    background-color: ${({theme}) => theme.colors.geralWhite};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
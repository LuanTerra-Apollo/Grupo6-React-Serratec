import { useState } from "react";
import styled from "styled-components";
import { Input } from "./Inputs.style";
import { Button } from "./Buttons.style";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #EBEBEB;
`

const FormCadastroStyled = styled.form`
    width: 55%;
    height: 75%;
    min-width: 480px;
    min-height: 560px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgb(97, 96, 96);

    h1 {
        font-size: 60px;
        margin-top: 60px;
        text-shadow: -4px 3px 4px #8d8d8d;;
    }

    .DivInputs {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 45%;
        .InputsCadastro {
            height: 13%;
            width: 75%;
            font-size: 24px;
            border: 0px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
    }

    .DivBotoes {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .BotaoCadastrar {
            height: 80%;
            width: 30%;
            border: 0px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            font-size: 24px;
        }

        .LinkLogin {
            font-size: 18px;
            color: #007094;
            font-weight: bold;
        }
    }
`

export const FormCadastro = (props) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        props.handleCadastro(nome, email, senha, confirmarSenha)

        handleLimpar()
    }

    const handleLimpar = () => {
        setNome(''),
        setEmail(''),
        setSenha(''),
        setConfirmarSenha('')
    }

    return (
        <FormContainer>
            <FormCadastroStyled onSubmit={handleSubmit}>
                <h1>Cadastro</h1>
                <div className='DivInputs'>
                <Input className='InputsCadastro' value={nome} onChange={(e) => { setNome(e.target.value) }} type="text"  placeholder='nome' required='required'/>
                <Input className='InputsCadastro' value={email} onChange={(e) => { setEmail(e.target.value) }} type="text"  placeholder='email' required='required' />
                <Input className='InputsCadastro' value={senha} onChange={(e) => { setSenha(e.target.value) }} type="text" placeholder='senha' required='required'  />
                <Input className='InputsCadastro' value={confirmarSenha} onChange={(e) => { setConfirmarSenha(e.target.value) }} type="text" placeholder='confirmar senha' required='required'  />
                </div>
                <div className='DivBotoes'>
                <Button className='BotaoCadastrar' type='submit'>Cadastrar</Button> <br />
                <Link className='LinkLogin' to={'/login'} >Já possui conta?</Link>
                </div>
            </FormCadastroStyled>
        </FormContainer>
    )
}
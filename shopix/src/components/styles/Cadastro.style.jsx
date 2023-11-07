import { useState } from "react";
import styled from "styled-components";
import { Input } from "./Inputs.style";
import { Button } from "./Buttons.style";
import { Link } from "react-router-dom";
import imgCadastro from "./../../img/login4.jpg"

const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #EBEBEB;
`

const FormCadastroStyled = styled.form`
    width: 55%; 
    height: 50%;
    min-height: 30rem;
    max-height: 30rem;
    max-width: 70%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgb(97, 96, 96);

    h1 {
        font-size: 60px;
        /* margin-top: 60px; */
        text-shadow: -4px 3px 2px #8d8d8d;;
    }

    .formCadastro{
        width: 65%;
        margin-right: 20px;
        display: flex;
        padding: 60px 0 60px 0;
        flex-direction: column;
        justify-content: space-around;
        align-items: none;
    }

    .DivInputs {
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        /* align-items: center; */
        width: 100%;
        height: 100%;
        
        .InputsCadastro {
            /* height: 13%; */
            width: 90%;
            font-size: 24px;
            /* border: 0px; */
            margin: 5px;
            /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
        }
    }

    .divImagem {
        width: 100%;
        height: 100%;
        /* display: flex; */
        /* justify-content: center; */
        

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

        .LinkLogin {
            font-size: 18px;
            color: #007094;
            margin: 0;

            &:hover{
                color: #049bce;
            }
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
                <div className='divImagem'>
                    <img className='ImagemLogin'src={imgCadastro} alt="" style={{objectFit: "cover"}}/>
                </div>

                <div className="formCadastro">
                    <h1 style={{margin: "0px 0 30px 0", textAlign: "center", fontSize: "55px"}}>Cadastrar</h1>
                    <div className="DivInputs" style={{width: "100%", marginBottom: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Input className='InputsCadastro' value={nome} onChange={(e) => { setNome(e.target.value) }} type="text"  placeholder='nome' required='required'/>
                        <Input className='InputsCadastro' value={email} onChange={(e) => { setEmail(e.target.value) }} type="text"  placeholder='email' required='required' />
                        <Input className='InputsCadastro' value={senha} onChange={(e) => { setSenha(e.target.value) }} type="password" placeholder='senha' required='required'  />
                        <Input className='InputsCadastro' value={confirmarSenha} onChange={(e) => { setConfirmarSenha(e.target.value) }} type="password" placeholder='confirmar senha' required='required'  />
                    </div>

                    <div className='DivBotoes'>
                        <Button className='BotaoCadastrar' type='submit'>Cadastrar</Button> <br />
                        <p>Já possui uma conta? <Link className='LinkLogin' to={'/login'} >Logar</Link></p>
                    </div>
                </div>
            </FormCadastroStyled>
        </FormContainer>
    )
}
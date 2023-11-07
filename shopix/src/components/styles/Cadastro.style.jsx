import { useState } from "react";
import styled from "styled-components";
import { Input } from "./Inputs.style";
import { Button } from "./Buttons.style";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #EBEBEB;
`

const FormCadastroStyled = styled.form`
    min-height: 30rem;
    max-height: 30rem;
    /* background-color: white; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgb(97, 96, 96);
    /* min-width: 480px; */
    /* min-height: 560px; */
    background-color: white;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-around; */
    /* align-items: center; */
    /* border-radius: 8px; */
    /* box-shadow: 0px 0px 10px rgb(97, 96, 96); */

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
            width: 90%;
            font-size: 24px;
            border: 0px;
            margin: 5px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
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
            /* font-weight: bold; */

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
                    <img className='ImagemLogin'src="https://educationtribe.in/wp-content/uploads/2020/11/Digital-Marketing.png" alt="" style={{objectFit: "contain"}}/>
                </div>

                <div style={{width: "65%", marginRight: "20px"}}>
                    <h1 style={{margin: "0px 0 30px 0", textAlign: "center", fontSize: "45px"}}>Cadastro</h1>
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
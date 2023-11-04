import { Link } from "react-router-dom"
import {Form} from "../../components/styles/Forms.style"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { Input, H1 } from "../../components/styles/Inputs.style"
import { Button } from "../../components/styles/Buttons.style"
import {api} from "../../api/api"
import { useState } from "react"



const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleCadastro = async (e) => {
        e.preventDefault();
    
        if (senha !== confirmarSenha) {
          alert('As senhas não coincidem');
          return;
        }
    
        try {
          await api.post('/users', {
            nome,
            email,
            senha,
          });
    
          alert('Cadastro realizado com sucesso!');
       
        } catch (error) {   
          console.error('Erro ao cadastrar:', error);
          alert('Erro ao cadastrar');
        }
      };

    return (
        <>
            <Wrapper>
            <Form onSubmit={handleCadastro} width='40%' height='70%' className='formLogin'>
                <H1 style={{fontSize: '450%', marginTop: '30px', marginBottom:'50px'}}>Cadastro</H1>
                <Input value={nome} onChange={(e) => { setNome(e.target.value) }}  style={{marginBottom:'-25px'}} width='75%' height='7%' type="text"  placeholder='nome' /> <br />
                <Input value={email} onChange={(e) => { setEmail(e.target.value) }} style={{marginBottom:'-25px'}} width='75%' height='7%' type="text"  placeholder='email' /> <br />
                <Input value={senha} onChange={(e) => { setSenha(e.target.value) }} style={{marginBottom:'-25px'}} width='75%' height='7%' type="text" placeholder='senha'  /> <br />
                <Input value={confirmarSenha} onChange={(e) => { setConfirmarSenha(e.target.value) }} width='75%' height='7%' type="text" placeholder='confirmar senha'  /> <br />
                <Button width='30%' height='70px' type='submit'>Cadastrar</Button> <br />
                <Link style={{color: "#007094", fontWeight: 'bold', fontSize:'24px', position: 'absolute', bottom: '16%'}} to={'/login'} >Já possui conta?</Link>
            </Form>
            </Wrapper>
        </>
    )
}

export default Cadastro
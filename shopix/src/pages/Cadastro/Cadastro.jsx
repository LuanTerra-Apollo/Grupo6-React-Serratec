import { Link } from "react-router-dom"
import { FormCadastro } from "../../components/styles/Cadastro.style"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { Input} from "../../components/styles/Inputs.style"
import { Button } from "../../components/styles/Buttons.style"
import {api} from "../../api/api"
import { useState } from "react"
import Footer from "../../components/components/footer/Footer"
import Navibar from "../../components/components/navibar/Navibar"



const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleCadastro = async (nome, email, senha, confirmarSenha) => {
    
        if (senha !== confirmarSenha) {
          alert('As senhas não coincidem');
          return
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
      }

    return (
        <>
          <Wrapper>
            <Navibar />
              <FormCadastro handleCadastro={handleCadastro} nome={nome} email={email} senha={senha} confirmarSenha={confirmarSenha} /> 
            <Footer />
          </Wrapper>
        </>
    )
}

export default Cadastro
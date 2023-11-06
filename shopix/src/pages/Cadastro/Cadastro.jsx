import { Link, useNavigate } from "react-router-dom"
import { FormCadastro } from "../../components/styles/Cadastro.style"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { Input} from "../../components/styles/Inputs.style"
import { Button } from "../../components/styles/Buttons.style"
import {api} from "../../api/api"
import Footer from "../../components/components/footer/Footer"
import Navibar from "../../components/components/navibar/Navibar"
import { useState, useEffect } from "react"

const Cadastro = () => {
    const navigate = useNavigate()

    useEffect(() => {

      if(localStorage.user_id) {
        navigate('/')
      }

    }, [])

    const handleCadastro = async (nomeCadastrar, emailCadastrar, senhaCadastrar, confirmarSenha) => {

      const response = await api.get('/users')

      if (senhaCadastrar !== confirmarSenha) {
        alert('As senhas não coincidem')
        return
      }

      const emailEncontrado = response.data.filter(({email}) => {
        return email === emailCadastrar
      })

      if(emailEncontrado.length == 0) {
        console.log(response.data)
        console.log(emailEncontrado)
        try {
          await api.post('/users', {
            nome: nomeCadastrar,
            email: emailCadastrar,
            senha: senhaCadastrar,
          });
    
          alert('Cadastro realizado com sucesso!');
          navigate("/login")
        
        } catch (error) {   
          console.error('Erro ao cadastrar:', error);
          alert('Erro ao cadastrar');
        }
      } else {
        alert('Email já cadastrado')
      }
    }  

    return (
        <>
          <Wrapper>
            <Navibar />
              <FormCadastro handleCadastro={handleCadastro}/> 
            <Footer />
          </Wrapper>
        </>
    )
}

export default Cadastro
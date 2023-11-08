import { useNavigate } from "react-router-dom"
import { FormCadastro } from "../../components/styles/Cadastro.style"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { api } from "../../api/api"
import { useEffect } from "react"
import Footer from "../../components/components/footer/Footer"
import Navbar from "../../components/components/Navbar/Navbar"

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
        try {
          await api.post('/users', {
            nome: nomeCadastrar,
            email: emailCadastrar,
            senha: senhaCadastrar,
            favoritos: []
          });
    
          alert('Cadastro realizado com sucesso!');
          navigate("/login")
        
        } catch (error) {   
          alert('Erro ao cadastrar');
        }
      } else {
        alert('Email já cadastrado')
      }
    }  

    return (
        <>
          <Wrapper>
            <Navbar />
              <FormCadastro handleCadastro={handleCadastro}/> 
            <Footer />
          </Wrapper>
        </>
    )
}

export default Cadastro
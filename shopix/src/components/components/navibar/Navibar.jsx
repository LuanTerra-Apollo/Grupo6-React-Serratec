import logo from '../../../img/SHOPIX2.png'
import { Link } from "react-router-dom";
import boneco from '../../../img/boneco.png'
import styled from 'styled-components';
import carrinho from '../../../img/carrinho.png'
import { InputBarraPesquisa } from '../../styles/Inputs.style';
import { api } from '../../../api/api'
import { useState, useEffect, useContext } from 'react';
import { LoginContext } from '../../../context/LoginContext';
import { ProdutosContext } from '../../../context/ProdutosContext'
import logoutLogo from '../../../img/saida.png'

const Navi = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: rgb(100, 41, 139);
    height: 50px;
    align-items: center;

    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    @media  (max-width: 854px){

        .Pesquisa{
            width:400px;
            height: 30px;
        }

        .EntraRegitrar{
            font-size: 10px;
        }

        .DireitaNav{
            padding-right: 30px;

        }
        .User{
            width: 20px;
            height: 20px;
        }
        .Car{
            width: 25px;
            height: 25px;
        }
    }
        
    
`


const Marca = styled.div`
  
    width: 200px;
    height: 45px;

    .Marca{

        filter: invert(100%);
        margin-left: 20px;
        
        &:hover{
            /* -webkit-filter: drop-shadow(5px 5px 5px #df6fda); */
            /* filter: drop-shadow(6px 4px 4px #df6fda); */
        }
    }
    

`
const Car = styled.div`
    width: auto;
    height: 30px;
    

    &:hover{
        -webkit-filter: drop-shadow(5px 5px 5px #df6fda);
        filter: drop-shadow(6px 4px 4px #df6fda);
    }
 
`
const User = styled.div`
    width: 30px;
    height: 30px;

`
const DireitaNav = styled.div`
    display: flex;
    justify-content: space-around;
    width: 200px;
    align-items: center;
    height: 50px;

.EntrarRegistrar{
        color:white;
        text-decoration: none;


&:hover{
        color:#df6fda ;
        -webkit-filter: drop-shadow(5px 5px 5px #df6fda);
        filter: drop-shadow(6px 4px 4px #df6fda);
            }
    }
`

const NomeUsuario = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    a {
        color: white;
        text-decoration: none;
    }
`

const DeslogarDiv = styled.div`
    align-items: center;
    width: 30px;
    height: 30px;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

const LoginDiv = styled.div`
    display: flex;
    justify-content: space-between;

`

const Navibar = () => {
    const [isLoginCadastroPages, SetIsLoginCadastroPages] = useState(false);
    const [ inputPesquisa, setInputPesquisa ] = useState('')
    const { setProdutos } = useContext(ProdutosContext);
    const [ userLogin, setUserLogin ] = useState({})

    useEffect(() => {
        const currentUrl = window.location.pathname;
        SetIsLoginCadastroPages(currentUrl === '/login' || currentUrl === '/cadastro')

        if(localStorage.user_id) {
            handleCarregarUsuario(JSON.parse(localStorage.getItem('user_id')).id) 
        }


    }, [])

    useEffect(() => {
        if (inputPesquisa.length == 0) {
            handleCarregarProdutos()
        }
    }, [inputPesquisa])

    const handleChangePesquisa = (e) => {

        setInputPesquisa(e.target.value)
    }

    const handleCarregarUsuario = async (id) => {
        try {
            const response = await api.get(`/users/${id}`)
            
            if (response.status === 200) {
                setUserLogin(response.data)
            }

        } catch (error) {
            localStorage.removeItem('user_id')
            console.clear()
        }
    }

    const handleCarregarProdutos = async () => {
        
        const response = await api.get('/produtos')

        setProdutos(response.data)
    }


    const handlePesquisar = async (e) => {
        e.preventDefault()
        
        const response = await api.get('/produtos', {params: {
            nome_like: inputPesquisa
        }})

        if (response.data.length < 1) {
            alert('Nenhum produto foi econtrado!')
        } else {
            setProdutos(response.data)
        }
    }

    const handleDeslogar = () => {
        localStorage.removeItem('user_id')
    }

    return (
        <Navi >
            <Marca>
                <Link className='Marca' to ='/'><img src={logo} /></Link>
            </Marca>

            {isLoginCadastroPages ? (
                <>
                </>
            ) : (
                <>
                <form action="" onSubmit={handlePesquisar}>
                    <InputBarraPesquisa className='Pesquisa' type="search" placeholder='pesquisar' value={inputPesquisa} onChange={handleChangePesquisa}/> 

                </form>

            <DireitaNav className='DireitaNav'>
                <Car title={'Carrinho'} className='Car'>
                    <Link to='/carrinho'>  <img src={carrinho} alt="Carrinho" /></Link>
                </Car>

                    {(Object.keys(userLogin).length === 0) ? (
                        <>
                            <User title='Perfil' className='User'>
                                <img src={boneco} alt="Perfil" />

                            </User>

                            <Link className='EntrarRegistrar' to='/login'>Entre/Registrar</Link>
                        </>
                        ) : (
                        <>  
                            <Link to={'/pedidos'}>
                                <User title='Perfil' className='User'>
                                    <img src={boneco} alt="Perfil" />
                                </User>
                            </Link>
                            <Link to={'/login'} onClick={handleDeslogar}>
                                <DeslogarDiv title='Sair do Site'>
                                    <img src={logoutLogo} alt="Sair do site" />
                                </DeslogarDiv>
                            </Link>
                        </>
                    )}
                
            </DireitaNav>
            </>
            )}
            
        </Navi>
    )
    
}

export default Navibar
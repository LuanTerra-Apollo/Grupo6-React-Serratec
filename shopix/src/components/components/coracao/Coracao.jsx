import { useEffect, useState } from "react";
import { api } from '../../../api/api'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DivFavorito = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    
    p {
        color: red;
        margin-left: 5px;
    }

    
    button {
        border: 0px;
        background-color: #ffff;
    }
    
    img {
        width: 40px;
        cursor: pointer;
        -webkit-filter: drop-shadow(5px 5px 5px #222222cf);
        filter: drop-shadow(2px 3px 5px #222222cf);
    }
    
`

const Coracao = ({idProduto}) => {
    const [ userLogin, setUserLogin ] = useState({})
    const [ produto, setProduto ] = useState({})
    const [ estado, setEstado ] = useState(false)
    const [ modificado, setModificado ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        handleCarregarTudo()
    },[])
    
    useEffect(() => {
        handleCarregarTudo()
    },[modificado])

    const handleCarregarTudo = async () => {

        const produtoEncontrado = await handleBuscarProduto()
        
        const usuarioLogado = await handleCarregarUsuario()
        
        if (!isEmpty(usuarioLogado)) {
            handleCarregarEstado(usuarioLogado, produtoEncontrado)
        }
    }
    
    const handleBuscarProduto = async () => {
        const response = await api.get(`/produtos/${idProduto}`)
        setProduto(response.data)

        return response.data
    }

    const handleCarregarUsuario = async () => {
        if (localStorage.user_id) {
            const id = JSON.parse(localStorage.getItem('user_id')).id

            try {
                const response = await api.get(`/users/${id}`)
                
                if (response.status === 200) {
                    setUserLogin(response.data)
                    return response.data
                }
            } catch (error) {
                localStorage.removeItem('user_id')
                setUserLogin({})
                setEstado(false)
                console.clear()
            }
        } else {
            setUserLogin({})
            setEstado(false)
        }
        
        return {}
    }

    function isEmpty(obj) {
        for(var prop in obj) {
          if(obj.hasOwnProperty(prop)) {
            return false;
          }
        }
        return JSON.stringify(obj) === JSON.stringify({});
      }


    const handleCarregarEstado = (usuario, produtoAtual) => {
        
        const produtoEcontrado = usuario.favoritos.filter((favorito) => favorito === produtoAtual.id)

        if (produtoEcontrado.length >= 1) {
            setEstado(true)
            return true
        }

        setEstado(false)
        return false        
    }

    const handleIncluirNosFavoritos = async () => {
        
        await api.patch(`/users/${userLogin.id}`, {
            favoritos: [...userLogin.favoritos, produto.id]
        })
        
        await api.patch(`/produtos/${produto.id}`, {
            favoritos: produto.favoritos + 1
        })

        let novoProduto = produto

        novoProduto.favoritos += 1

        setProduto(novoProduto)
    }
    
    
    const handleExcluirNosFavoritos = async () => {
        
        const novoFavoritos = userLogin.favoritos.filter(p => produto.id !== p)
        
        await api.patch(`/users/${userLogin.id}`, {
            favoritos: novoFavoritos
        })
        
        await api.patch(`/produtos/${produto.id}`, {
            favoritos: produto.favoritos - 1
        })
        
        let novoProduto = produto

        novoProduto.favoritos -= 1

        setProduto(novoProduto)
    }


    const handleClick = () => {

        if(!isEmpty(userLogin)) {

            if (!estado) {
                handleIncluirNosFavoritos()
                setEstado(true)
            } else {
                handleExcluirNosFavoritos()
                setEstado(false)
            }
            
            setModificado(!modificado)    
        } else {
            navigate('/login')
        }
    }


    


    return (
            <DivFavorito>
                {(estado) ? (
                    <>
                        <div><button onClick={handleClick}><img src="https://i.imgur.com/mKjFPY5.png" alt="" /></button></div>
                        <p style={{color: 'red'}}>{produto.favoritos}</p>
                    </>
                    ) : (
                    <>
                        <div><button onClick={handleClick}><img src="https://i.imgur.com/K9ZdsT4.png%7D" alt="" /></button></div>
                        <p style={{color: 'black'}}>{produto.favoritos}</p>
                    </>
                    )
                }
            </DivFavorito>
    )
}


export default Coracao

import { useEffect, useState } from "react";
import { api } from '../../../api/api'
import styled from "styled-components";

const DivFavorito = styled.div`
    

    
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

    useEffect(() => {

        if (localStorage.user_id) {
            handleCarregarUsuario(JSON.parse(localStorage.getItem('user_id')).id)
        }

        handleBuscarProduto(idProduto)
    },[])

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

    const handleBuscarProduto = async (id) => {
        const response = await api.get(`/produtos/${id}`)

        setProduto(response.data)
    }


    const handleIncluirNosFavoritos = async () => {
        api.patch(`/users/${userLogin.id}`, {
            favoritos: [...userLogin.favoritos, produto.id]
        })
    }

    const handleExcluirNosFavoritos = async () => {
        
        const novoFavoritos = userLogin.favoritos.filter(p => produto.id !== p)
        
        api.patch(`/users/${userLogin.id}`, {
            favoritos: novoFavoritos
        })
    }

    const handleClick = () => {

        let likeAtivo = false  
        
        userLogin.favoritos.forEach((produtoFavoritado) => {
            if (produto.id === produtoFavoritado) {
                likeAtivo = true
            }
        })
            
        if (!likeAtivo) {
            handleIncluirNosFavoritos()
            setEstado(true)
        } else {
            handleExcluirNosFavoritos()
            setEstado(false)
        }
       
        
        handleCarregarUsuario(userLogin.id)
    }


    


    return (
            <DivFavorito>

                {(estado) ? (
                    <div><button onClick={handleClick}><img src="https://i.imgur.com/mKjFPY5.png" alt="" /></button></div>
                ) : (
                    <div><button onClick={handleClick}><img src="https://i.imgur.com/K9ZdsT4.png%7D" alt="" /></button></div>
                )
                }
                </DivFavorito>
    )
}


export default Coracao

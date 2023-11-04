import { useContext, useEffect } from "react"
import { LoginContext } from "../../context/LoginContext"
import { ProdutosContext } from "../../context/ProdutosContext"
import { Wrapper } from "../../components/styles/Wrapper.style"
import ProdutoCard from "../../components/components/ProdutoCard/ProdutoCard"
import { api } from "../../api/api";

import styled from "styled-components"

const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 42px;
    place-items: center;
    align-items: center;

    @media (max-width: 1440px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1080px)  {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 730px)  {
        grid-template-columns: 1fr;
    }
    
`


const Produtos = () => {
    const { login, user} = useContext(LoginContext)
    const { produtos, setProdutos } = useContext(ProdutosContext)


    useEffect(() => {
        handleCarregarProdutos()
    },[])

    const handleCarregarProdutos = async () => {
        const response = await api.get('/produtos')

        setProdutos(response.data)
    }

    return (
        <Wrapper>
            <Display>
                {produtos.map(({ nome, preco, imgurl}, idx) => <ProdutoCard key={idx} nome={nome} preco={preco} imgurl={imgurl}/>)}
            </Display>                  
        </Wrapper>
    )

}

export default Produtos
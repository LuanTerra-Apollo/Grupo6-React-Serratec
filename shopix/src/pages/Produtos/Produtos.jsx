import { useContext, useEffect } from "react"
import { LoginContext } from "../../context/LoginContext"
import { ProdutosContext } from "../../context/ProdutosContext"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { api } from "../../api/api"
import ProdutoCard from "../../components/components/ProdutoCard/ProdutoCard"
import Navibar from "../../components/components/navibar/Navibar"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Footer from "../../components/components/footer/Footer"

const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 42px;
    min-height: 52.6rem;

    place-items: center;
    align-items: center;
    margin-top: 2.625rem;
    margin-bottom: 2.625rem;

    @media (max-width: 1640px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 1400px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 730px)  {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 410px) {
        grid-template-columns: 1fr;
    }
`

const Produtos = () => {
    const { login, user} = useContext(LoginContext)
    const { produtos, setProdutos } = useContext(ProdutosContext)

    useEffect(() => {
        handleCarregarProdutos()
    },[])

    useEffect(() => {
        imprimirProdutos()
    }, [produtos])

    const handleCarregarProdutos = async () => {
        const response = await api.get('/produtos')
        
        setProdutos(response.data)
    }

    const imprimirProdutos = () => {
        
        return produtos.map(({ id, nome, preco, imgurl}, idx) => (
            <Link key={idx} to={`/produto/${id}`}>
                <ProdutoCard key={idx} nome={nome} preco={preco} imgurl={imgurl}/>
            </Link>
        ))
    }

    return (
        <Wrapper>
            <Navibar />
            <Display>
                {imprimirProdutos()}
            </Display>
            <Footer/>
        </Wrapper>
    )
}

export default Produtos
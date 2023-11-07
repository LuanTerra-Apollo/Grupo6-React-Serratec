import { useContext, useEffect } from "react"
import { ProdutosContext } from "../../context/ProdutosContext"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { api } from "../../api/api"
import ProdutoCard from "../../components/components/ProdutoCard/ProdutoCard"
import Navibar from "../../components/components/navibar/Navibar"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Footer from "../../components/components/footer/Footer"
import bannerSite from "../../img/banner.png"

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
    const { produtos } = useContext(ProdutosContext)

    useEffect(() => {
        imprimirProdutos()
    }, [produtos])

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
            <img src={bannerSite} alt="" style={{ minWidth: "100%", height: "260px", margin: "3px 0 3px 0"}}/>
            <div style={{textAlign: "center", background: "#64298b", padding: "6px", borderBottom: "2px solid white", color: "white"}}>
                <h2>Lançamentos</h2>
            </div>
            <Display>
                {imprimirProdutos()}
            </Display>
            <Footer/>
        </Wrapper>
    )
}

export default Produtos
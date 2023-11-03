import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { ProdutosContext } from "../../context/ProdutosContext"
import { Wrapper } from "../../components/styles/Wrapper.style"
import ProdutoCard from "../../components/components/ProdutoCard/ProdutoCard"

import styled from "styled-components"

const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 42px;
    align-items: center;

    width: 100%;
    height: auto;


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
    const { produtos } = useContext(ProdutosContext)

    return (
        <Wrapper>
            <Display>
                {produtos.map((p, idx) => <ProdutoCard key={idx}/>)}
            </Display>                  
        </Wrapper>
    )

}

export default Produtos
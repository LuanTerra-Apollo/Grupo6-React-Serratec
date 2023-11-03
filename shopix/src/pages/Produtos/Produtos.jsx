import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { ProdutosContext } from "../../context/ProdutosContext"
import ProdutoCard from "../../components/components/ProdutoCard/ProdutoCard"

import { Grid } from '@chakra-ui/react'
import styled from "styled-components"

const Display = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 42px;
`


const Produtos = () => {
    const { login, user} = useContext(LoginContext)
    const { produtos } = useContext(ProdutosContext)

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            {produtos.map((p, idx) => <ProdutoCard key={idx}/>)}
<       </Grid>
        
    )

}

export default Produtos
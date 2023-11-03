import { CardProduto } from "../../components/styles/CardProduto.style"
import { Wrapper } from "../../components/styles/Wrapper.style"

const Produto = () => {
    return (
        <Wrapper>
            <CardProduto height='856px' width='1321px'>
                <div style={{height: '810px', width: '776px', backgroundColor: 'orange'}}></div>
                <div style={{height: '810px', width: '431px', backgroundColor: 'gray'}}></div>
            </CardProduto>
        </Wrapper>
    )
}

export default Produto
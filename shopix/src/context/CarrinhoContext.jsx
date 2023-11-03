import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CarrinhoContext = createContext({})

export const CarrinhoProvider = ({ children }) => {
    const navigate = useNavigate();
    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeCompra, setQuantidadeCompra] = useState("")
    const [vlTotalPr, setVlTotalPr] = useState(0)
    const [vlTotal, setVlTotal] = useState(0)
    var prCarrinho = [...carrinho]

    const handleAddCarrinho = (produto) => {

        console.log(produto)
        if (carrinho.some((pr) => pr.produto.id === produto.id)) {
            alert("produto já adicionado no carrinho")
        }else{
            if(quantidadeCompra > produto.quantidade){
                alert("Estoque insuficiente")
            }else{
                
                setVlTotal(vlTotal + produto.preco * quantidadeCompra)
                setCarrinho([...carrinho, {produto, quantidadeCompra, vlTotalPr : produto.preco * quantidadeCompra }])
                handleExibirCarrinho()
            }
        }
        console.log(vlTotal)
        console.log(carrinho)
        
    }

    
      //testes
    const handleExibirCarrinho = () => {
        navigate("/carrinho");
        console.log(prCarrinho)
    }

    const handleExibirProdutoParaTeste = () => {
        navigate("/produto/2");
    }

    return (
        <CarrinhoContext.Provider value={{
            prCarrinho,
            carrinho,
            setCarrinho, 
            handleAddCarrinho, 
            quantidadeCompra, 
            setQuantidadeCompra,
            vlTotalPr,
            vlTotal,
            handleExibirCarrinho,
            handleExibirProdutoParaTeste
        }}>{children}</CarrinhoContext.Provider>
    )
}

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const CarrinhoContext = createContext({})

export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);
    const [quantidadeCompra, setQuantidadeCompra] = useState(0)
    const [vlTotalPr, setVlTotalPr] = useState(0)
    const [vlTotal, setVlTotal] = useState(0)
    const [qtdPr, setQtdPr] = useState(0)
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
                setQtdPr(qtdPr + quantidadeCompra)
                setCarrinho([...carrinho, {produto, quantidadeCompra, vlTotalPr : produto.preco * quantidadeCompra }])
                handleExibirCarrinho()

                const teste2 = api.get(`/carrinho`).data

                teste2.map((user) => {
                    if(user.idUser === 1){
                        api.patch([...itens , {itens:produto, vlTotalPr : produto.preco * quantidadeCompra, quantidadeCompra }])
                    }else{
                        api.post('/carrinho', {idUser: 1, vlTotal, itens:produto, vlTotalPr : produto.preco * quantidadeCompra, quantidadeCompra })
                    }
                })
            }
        }
        console.log(vlTotal)
        console.log(carrinho)
        
    }

    
      //testes
    const handleExibirCarrinho = () => {
      
        console.log(prCarrinho)
    }

    const handleExibirProdutoParaTeste = () => {
       
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
            setVlTotal,
            handleExibirCarrinho,
            handleExibirProdutoParaTeste,
            qtdPr
        }}>{children}</CarrinhoContext.Provider>
    )
}

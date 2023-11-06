import { createContext, useState } from "react";

export const CarrinhoContext = createContext({})

export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([])
    const [quantidadeCompra, setQuantidadeCompra] = useState(0)
    const [vlTotalPr, setVlTotalPr] = useState(0)
    const [vlTotal, setVlTotal] = useState(0)
    const [qtdPr, setQtdPr] = useState(0)
    const [produto, setProduto] = useState({})
    const [qtdTotal, setQtdTotal] = useState(0)

    return (
        <CarrinhoContext.Provider value={{
            produto,
            setProduto,
            carrinho,
            setCarrinho,
            quantidadeCompra,
            setQuantidadeCompra,
            vlTotalPr, 
            setVlTotalPr,
            vlTotal,
            setVlTotal,
            qtdPr,
            qtdTotal, 
            setQtdTotal
        }}>{children}</CarrinhoContext.Provider>
    )
}

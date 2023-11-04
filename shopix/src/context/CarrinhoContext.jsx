import { createContext, useState } from "react";

export const CarrinhoContext = createContext({})

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])

    return (
        <CarrinhoContext.Provider value={{Carrinho, setCarrinho}}>{children}</CarrinhoContext.Provider>
    )
}

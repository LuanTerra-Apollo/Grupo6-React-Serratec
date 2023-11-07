import { createContext, useState } from "react";


export const ProdutosContext = createContext({})


export const ProdutosProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])
    const [inputPesquisa, setInputPesquisa] = useState('')
    const [favorito, setFavorito] = useState(false)

    return (
        <ProdutosContext.Provider value={{produtos, setProdutos, inputPesquisa, setInputPesquisa, favorito, setFavorito}}>{children}</ProdutosContext.Provider>
    )
}
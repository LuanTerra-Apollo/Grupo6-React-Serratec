import { createContext, useState, useEffect } from "react";
import { api } from "../api/api";


export const ProdutosContext = createContext({})


export const ProdutosProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        handleCarregarProdutos()
    },[])

    const handleCarregarProdutos = async () => {
        const response = await api.get('/produtos')

        setProdutos(response.data)
    }

    return (
        <ProdutosContext.Provider value={{produtos, setProdutos}}>{children}</ProdutosContext.Provider>
    )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Produtos from './pages/Produtos/Produtos.jsx' ;
import Produto from './pages/Produto/Produto.jsx';
import Login from './pages/Login/Login.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Carrinho from './pages/Carrinho/Carrinho.jsx';
import Pedido from './pages/Pedidos/Pedidos.jsx';
import { LoginProvider } from './context/LoginContext.jsx';
import { ProdutosProvider } from './context/ProdutosContext.jsx';
import { GlobalStyle } from './components/styles/GlobalStyle.style.jsx'
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/Theme.style.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProdutosProvider><Produtos /></ProdutosProvider>,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/pedido",
    element: <Pedido />
  },
  {
    path: "/produto",
    element: <Produto />
  },
  {
    path: "/carrinho",
    element: <Carrinho />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <LoginProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <RouterProvider router={router} />
          </ThemeProvider>
      </LoginProvider>
  </React.StrictMode>
)

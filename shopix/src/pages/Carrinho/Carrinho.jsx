import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { api } from "../../api/api";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const CartContainer = styled.div`
    padding: 12px;
    height: 130px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px #8f8f8f;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

const Infos = styled.div`
    font-size: 18px;
    width: 270px;
    height: 295px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px #8f8f8f;
    border-radius: 6px;
    text-align: center;
`;

const Infos2 = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

const ListaProdutos = styled.div`
    margin-left: 5px;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 72%;
    align-items: start;
`;

const Produto = styled.div`
    display: flex;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const ProdutoImg = styled.div`
    padding: 6px;
    margin-right: 15px;
    box-shadow: 2px 2px 15px #7c7c7c;
    img{
        width: 100%;
        height: 100%;
    }
`;

const BodyCarrinho = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    background: #B8B8B8;
    width: 100vw;
    height: 100vh;
`;

const GreenButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer; 
  font-size: 16px;
  margin-top: 25px;

  &:hover {
    background-color: #45a049;
  }
`;

const QuantityButton = styled.button`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const Carrinho = () => {
    
    const { carrinho, setCarrinho, prCarrinho, vlTotalPr, vlTotal, handleExibirCarrinho, handleExibirProdutoParaTeste } = useContext(CarrinhoContext);
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [img, setImg] = useState("")
    const [preco, setPreco] = useState("")
    const [quantidade, setQuantidade] = useState("")

    const frete = 0
    const vlTotalCompra = preco * quantidade;
    //const vlTotal = vlTotalCompra + frete;

    useEffect(() => {
        const buscarProdutos = async () => {
            try {
                const response = await api.get(`/produtos/1`);
                setNome(response.data.nome);
                setDescricao(response.data.descricao)
                setImg(response.data.imgurl)
                setPreco(response.data.preco)
                setQuantidade(response.data.quantidade)
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };
        
        buscarProdutos();
    }, []);
    
    const comprar = (e) => {
        e.preventDefault()
        handleExibirProdutoParaTeste()

        //--------------------------ATUALIZAR ESTOQUE FUNCIONANDO
        // try{
        //     carrinho.map((pr) => (
        //         api.patch(`/produtos/${pr.produto.id}`, {quantidade: pr.produto.quantidade - pr.quantidadeCompra})
        //     ))
        // } catch(e){
        //     alert("Deu tudo errado")
        // }
    }



    function diminuirQtd(pr) {
        //e.preventDefault()
        pr.quantidadeCompra = pr.quantidadeCompra - 1
        console.log(pr.quantidade)
    }

    return (
    <BodyCarrinho>
        <ListaProdutos>
            {carrinho.map((pr, index) => (
                <CartContainer key={index}>
                    <Produto>
                    <ProdutoImg>
                        <img src={pr.produto.imgurl} alt="" />
                    </ProdutoImg>
                    <div>
                        <h4 style={{marginBottom: '20px', marginTop: '6px'}}>{pr.produto.nome}</h4>
                        <p>{pr.produto.descricao}</p>
                    </div>
                </Produto>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h4>Quantidade: {pr.quantidadeCompra}</h4>

                      

                    <QuantityButton onClick={() => {diminuirQtd(pr)}}>
                    </QuantityButton>
                  
                    <h2>R$ {pr.vlTotalPr.toFixed(2)}</h2>
                </div>
                </CartContainer>
            ))}
            

            {/* <CartContainer>  
                <Produto>
                    <ProdutoImg>
                        <img src={img} alt="" />
                    </ProdutoImg>
                    <div>
                        <h4 style={{marginBottom: '20px', marginTop: '6px'}}>{nome}</h4>
                        <p>{descricao}</p>
                    </div>
                </Produto>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h4>Quantidade: {quantidade}</h4>
                    <h2>R$ {vlTotalCompra.toFixed(2)}</h2>
                </div>
            </CartContainer>

            <CartContainer>  
                <Produto>
                    <ProdutoImg>
                        <img src={img} alt="" />
                    </ProdutoImg>
                    <div>
                        <h4 style={{marginBottom: '20px', marginTop: '6px'}}>{nome}</h4>
                        <p>{descricao}</p>
                    </div>
                </Produto>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h4>Quantidade: {quantidade}</h4>
                    <h2>R$ {vlTotalCompra.toFixed(2)}</h2>
                </div>
            </CartContainer>

            <CartContainer>  
                <Produto>
                    <ProdutoImg>
                        <img src={img} alt="" />
                    </ProdutoImg>
                    <div>
                        <h4 style={{marginBottom: '20px', marginTop: '6px'}}>{nome}</h4>
                        <p>{descricao}</p>
                    </div>
                </Produto>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <h4>Quantidade: {quantidade}</h4>
                    <h2>R$ {vlTotalCompra.toFixed(2)}</h2>
                </div>
            </CartContainer> */}
        </ListaProdutos>
        
        
        <Infos>
            <h3 style={{marginBottom: '29px'}}>Resumo da Compra:</h3>
            <Infos2>

                <div style={{textAlign: 'left' }}>
                    <p style={{marginBottom: '15px'}}>Produtos ({quantidade})</p>
                    <p>frete</p>
                    <br />
                    <br />
                    <br />
                    <h5>TOTAL: </h5>
                </div>

                <div>
                    <h5 style={{marginBottom: '15px'}}>R$ {vlTotal.toFixed(2)}</h5>
                    <h5 style={{color: "green"}}>GRATIS</h5>
                    <br />
                    <br />
                    <br />
                    <h4>R$ {vlTotal.toFixed(2)}</h4>
                </div>

            </Infos2>
            <hr />
            <GreenButton onClick={comprar}>COMPRAR</GreenButton>    
        </Infos>
  
    </BodyCarrinho>
    )

}

export default Carrinho
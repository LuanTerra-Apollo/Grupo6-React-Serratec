import CardProduto from "../../components/components/CardProduto"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import styled from "styled-components";
import Navibar from "../../components/components/navibar/Navibar";
import Footer from "../../components/components/footer/Footer"



const CartContainer = styled.div`
    margin: 20px;
    padding: 10px;
    height: 95%;
    width: 90%;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px #8f8f8f;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
`;

const ListaProdutos = styled.div`
    padding: 20px;
    margin: 15px;
    box-shadow: 2px 2px 15px #7c7c7c;
    background-color: red;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    input{
        width: 50px;
        height: 20px;
    }
`;

const ProdutoImg = styled.div`
    padding: 20px;
    margin: 15px;
    box-shadow: 2px 2px 15px #7c7c7c;
    width: 55%;
    min-height: 0;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const BodyCarrinho = styled.div`
    padding: 25px;
    background: #B8B8B8;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
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
`

const Produto = () => {
    const { id } = useParams()

    const navigate = useNavigate()
    const { carrinho, setCarrinho, quantidadeCompra, setQuantidadeCompra, qtdTotal, setQtdTotal,
            vlTotal, setVlTotal, produto, setProduto, vlTotalPr, setVlTotalPr} = useContext(CarrinhoContext);
    const [quantidade, setQuantidade] = useState(0)

    
    const buscarProduto = async () => {
        const response = await api.get(`/produtos/${id}`)
        setProduto(response.data); 
    };

    useEffect(() => {
        buscarProduto()
    }, []);

    //teste
    const inserir = () => {
        if(quantidadeCompra.qtdCompra == 0 || quantidadeCompra.qtdCompra === 'e'){
            alert("Você está brincando, certo? Você precisa comprar pelo menos um produto!")
        }else{
            handleAddCarrinho(produto)
        }
    }

    const handleQuantidadeChange = (e) => {
        setQuantidadeCompra(e.target.value);
      };

    const handleAddCarrinho = () => {

        if(quantidadeCompra == 0 || quantidadeCompra === 'e'){
            alert("Você está brincando, certo? Você precisa comprar pelo menos um produto!")
        }else{
            if (carrinho.some((pr) => pr.produto.id === produto.id)) {
            alert("produto já adicionado no carrinho")
            }else{
                if(quantidadeCompra > produto.quantidade){
                    alert("Estoque insuficiente")
                }else{   
                    //setQuantidadeCompra([...quantidadeCompra, {id: produto.id, qtdCompra: quandidadeCompra}])
                    // setQtdTotal(qtdTotal + quantidadeCompra)
                    setQtdTotal(parseInt(qtdTotal) + parseInt(quantidadeCompra));
                    setVlTotalPr(produto.preco * quantidadeCompra)
                    setVlTotal(vlTotal + produto.preco * quantidadeCompra)
                    setCarrinho([...carrinho, {produto, quantidadeCompra, vlTotalPr: produto.preco * quantidadeCompra}])
                    
                    navigate('/carrinho')
                }
            }
        }
    }

    return (

    /*
        <Wrapper>
            <Link to={'/'}>sdfsdf</Link>
            {quantidadeCompra}
            <CardProduto produto={produto} handleAddCarrinho={handleAddCarrinho} handleQuantidadeChange={handleQuantidadeChange} /> 
        </Wrapper>
    */  
        <Wrapper>

            <Navibar />
            <BodyCarrinho>
                <CartContainer> 
                    <ProdutoImg>       
                        <img src={produto.imgurl} alt="" />
                    </ProdutoImg>
    
                    <ListaProdutos>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <h2 style={{marginBottom: '20px', marginTop: '6px'}}>{produto.nome}</h2>
                            <h2 style={{marginBottom: '20px', marginTop: '6px'}}>R$ {produto.preco}</h2>
                            <p>{produto.descricao}</p>
                        </div>

                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <p>Quantidade: </p> 
                                <input type="number" min="0" onChange={handleQuantidadeChange}/> ({quantidade}) disponivel
                            </div>
                            <GreenButton onClick={handleAddCarrinho}>ADICIONAR AO CARRINHO</GreenButton>
                        </div>
                    </ListaProdutos> 
                </CartContainer>
            </BodyCarrinho>

            <Footer />
        
        </Wrapper>
    )
}

export default Produto
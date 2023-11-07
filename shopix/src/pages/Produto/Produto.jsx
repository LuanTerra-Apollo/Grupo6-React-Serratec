import CardProduto from "../../components/components/CardProduto"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import styled from "styled-components";
import Navibar from "../../components/components/navibar/Navibar";
import Footer from "../../components/components/footer/Footer";
// import Contador from "../../components/components/contador/Contador";


const Container = styled.div`

`

const CartContainer = styled.div`
    margin: 20px;
    padding: 10px;
    height: 30rem;
    width: 60%;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px #8f8f8f;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
`;

const InfoProduto = styled.div`
    padding: 20px;
    /* margin: 15px; */
    border-radius: 4px;
    /* box-shadow: 2px 2px 15px #7c7c7c; */
    /* background-color: #EBEBEB; */
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    input{
        width: 59px;
        height: 35px;
        font-size: 30px;
        border-radius: 4px;
        border: 1px solid black;
        padding-left: 8px;
        margin: 0 15px 0 10px;
   
    }

    #nome {
    /* background-color: #64298b; */
    /* color: white; */
    margin-bottom: 20px;
    margin-top: 6px;
    /* border: none; */
    /* padding: 10px 20px; */
    /* border-radius: 5px; */
    /* cursor: pointer;  */
    /* font-size: 24px; */
    /* box-shadow: -1px 1px 3px black; */
    width: 100%;
    }

    .quantidade-container {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
    }

.botao-diminuir,
.botao-aumentar {
  width: 35px;
  height: 35px;
  font-size: 28px;
  cursor: pointer;
  background-color: #64298b;
  border: none;
  color: white;
}

.botao-diminuir{
    border-radius: 4px 0 0 4px;
}

.botao-aumentar{
    border-radius: 0 4px 4px 0;
}

.botao-diminuir:hover,
.botao-aumentar:hover{
    background-color: #9e42db;
}


.quantidade {
  font-size: 18px;
  margin: 0 10px;
}
`;

const ProdutoImg = styled.div`
    padding: 20px;
    margin: 15px;
    border-radius: 15px;
    background-color: white;
    /* box-shadow: -1px 1px 5px #64298b99; */
    width: 55%;
    min-height: 0;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const BodyCarrinho = styled.div`
    background: #EBEBEB;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100vw; */
    min-height: 100vh;
`;

const GreenButton = styled.button`
  background-color: #64298b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer; 
  font-size: 16px;
  box-shadow: -1px 1px 3px black;
  margin-top: 15px;
  width: 100%;

  &:hover {
    background-color: #9e42db;
    box-shadow: none;
  }
`;

const Descricao = styled.div`
    /* background: #ffffff; */
    /* box-shadow: 0px 0px 5px #c2c2c2; */
    border-radius: 3px;
    height: 12rem;
    padding: 10px 5px;
`;

const Produto = () => {
    const { id } = useParams()

    const navigate = useNavigate()
    const { carrinho, setCarrinho, quantidadeCompra, setQuantidadeCompra, qtdTotal, setQtdTotal,
            vlTotal, setVlTotal, produto, setProduto, vlTotalPr, setVlTotalPr} = useContext(CarrinhoContext);
    const [quantidade, setQuantidade] = useState(0)

    
    

    useEffect(() => {

        const buscarProduto = async () => {
            const response = await api.get(`/produtos/${id}`)
            setProduto(response.data);
            setQuantidadeCompra(1)
            
        };
        
        buscarProduto()
    }, []);

    const handleQuantidadeChange = (e) => {
        if(quantidadeCompra <= produto.quantidade){
            setQuantidadeCompra(e.target.value);
        }
      };

    const handleAddCarrinho = () => {
        if (localStorage.getItem('user_id') !== null && localStorage.getItem('user_id') !== undefined) {
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
                    
                    navigate('/')
                }
            }
        }
        }else{
            alert("Por favor, faça login para continuar com a compra.")
        }
    }

    useEffect(() => {
        if(quantidadeCompra > produto.quantidade){
            setQuantidadeCompra(produto.quantidade)
        }
        if(quantidadeCompra < 1){
            setQuantidadeCompra(1)
        }
    }, [quantidadeCompra])


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
            {/* {quantidadeCompra} */}
            <BodyCarrinho>
                <CartContainer> 
                    <ProdutoImg>       
                        <img src={produto.imgurl} alt="" />
                    </ProdutoImg>
    
                    <InfoProduto>
                        <div style={{width: '100%', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <h1 id="nome" >{produto.nome}</h1>
                            <h2 style={{marginTop: '6px'}}>R$ {produto.preco}</h2>
                            <p style={{color: 'green', marginBottom: '16px'}}>em ate 3x R$ {parseFloat(produto.preco/3).toFixed(3) } sem juros</p>
                            {/* <Descricao > */}
                                {/* <Contador /> */}
                                <h4 >Descrição do produto</h4>
                                <p style={{marginTop: '5px'}}>{produto.descricao}</p>
                            {/* </Descricao> */}
                        </div>
                        <div style={{width: '100%', display: "flex", flexDirection: "column", justifyContent: "space-between", margin: "auto auto 0"}}>
                            <div style={{display: "flex", width: '100%', alignItems: "center"}}>
                                {/* <div class="quantidade-container">
                                    <button class="botao-diminuir" onClick={() => {diminuirQtd(pr)}}>-</button>
                                    <div class="quantidade">{quantidadeCompra} </div>
                                    <button class="botao-aumentar" onClick={() => {aumentarQtd(pr)}}>+</button>
                                </div> */}
                                <p style={{fontSize: "20px"}}>Quantidade: </p>
                                <input type="number" min="1" value={quantidadeCompra} onChange={handleQuantidadeChange}/>
                            </div>
                            <GreenButton onClick={handleAddCarrinho}>ADICIONAR AO CARRINHO</GreenButton>
                                <p style={{color: 'green', textAlign: "center", marginTop: '5px', fontSize: '14px'}}> Apenas {produto.quantidade} em estoque </p>
                        </div>

                    </InfoProduto> 
                </CartContainer>
            </BodyCarrinho>
            <Footer />

        
        </Wrapper>
    )
}

export default Produto
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { api } from "../../api/api";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { Wrapper } from "../../components/styles/Wrapper.style"
import Navbar from "../../components/components/Navbar/Navbar.jsx"
import Footer from "../../components/components/footer/Footer";
import carrinhoVazioLogo from "../../img/carrinhoVazio.png"

const CartContainer = styled.div`
    padding: 12px;
    height: 130px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px #8f8f8f;
    border-radius: 0 0 6px 6px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

.quantidade-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.botao-diminuir,
.botao-aumentar {
  width: 30px;
  height: 30px;
  font-size: 24px;
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

const Infos = styled.div`
    font-size: 18px;
    width: 20rem;
    min-width: 25%;
    height: 430px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px #8f8f8f;
    border-radius: 6px;
    text-align: center;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal {
        background: #1eff008f;
        border: 1px solid #ccc;
        color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: -4px 4px 16px rgba(53, 53, 53, 0.76);
        position: relative;
        max-width: 400px;
        width: 100%;
        text-align: center;

        img{
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0px 0px 15px rgb(255, 255, 255);
        }
    }

    .close-button {
        position: absolute;
        font-size: 24px;
        top: 0px;
        right: 5px;
        cursor: pointer;
    }
`;

const Infos2 = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

const ListaProdutos = styled.div`
    margin-left: 5px;
    align-items: center;
    width: 72%;
    align-items: start;
`;

const Produto = styled.div`
    display: flex;
`;

const ProdutoImg = styled.div`
    padding: 6px;
    margin-right: 15px;
    min-width: 150px;
    max-width: 150px;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const BodyCarrinho = styled.div`
    padding: 25px;
    display: flex;
    justify-content: space-between;
    background: #EBEBEB;
    min-height: 100vh;
    background-size: cover;
    background-position: center center;
`;

const Button = styled.button`
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

const Titulo = styled.div`
    padding: 12px;
    height: 40px;
    width: 100%;
    background-color: #64298b;
    color: white;
    border-radius:  6px 6px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 18px;
        height: 18px;
        cursor: pointer;
        filter: invert(100%);

        &:hover{
            width: 17px;
            height: 17px;
        }
    }
`;

const CarrinhoVazio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;

    div{
        width: 60px;
        height: 60px;

        img{
            width: 100%;
            height: 100%;
        }
    }
`

const Carrinho = () => {
    
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const { carrinho, setCarrinho, vlTotal, setVlTotal, qtdTotal, setQtdTotal} = useContext(CarrinhoContext)

    useEffect(() => {
        if(!localStorage.user_id) {
            navigate('/login')
        }

    },[])

    const comprar = (e) => {
        e.preventDefault()

        if(carrinho.length > 0){ 
            openModal()
            registrarPedido()
            
            carrinho.map(async (pr) => (
              await  api.patch(`/produtos/${pr.produto.id}`, {quantidade: pr.produto.quantidade - pr.quantidadeCompra})
            ))

            setCarrinho([])
            setQtdTotal(0)
            setVlTotal(0)
        }else{
            alert("carrinho vazio")
        }
    }

    const registrarPedido = () => {

        const userId = JSON.parse(localStorage.getItem('user_id')).id;

        const pedidoItens = carrinho.map((pd) => ({
            idProduto: pd.produto.id,
            quantidade: pd.quantidadeCompra,
        }))

        const pedido = {
            dataPedido: new Date().toLocaleDateString(),
            valorTotal: vlTotal,
            idUser: userId,
            itens: pedidoItens,
        }
        api.post('/pedidos', pedido)
    }

    function diminuirQtd(pr) {
        if(pr.quantidadeCompra > 1){
            const carrinhoAtualizado = carrinho.map((item) => {
                if (item.produto.id === pr.produto.id) {
                    setVlTotal(vlTotal - pr.produto.preco)
                    setQtdTotal(qtdTotal - 1)
                    return {
                        ...item,
                        quantidadeCompra: pr.quantidadeCompra - 1,
                        vlTotalPr: item.produto.preco * (pr.quantidadeCompra - 1),
                    };
                }
                return item;
            });
        setCarrinho(carrinhoAtualizado);
        }
    }

    function aumentarQtd(pr) {
        if(pr.quantidadeCompra < pr.produto.quantidade){
            const carrinhoAtualizado = carrinho.map((item) => {
                if (item.produto.id === pr.produto.id) {
                    setVlTotal(parseFloat(vlTotal) + parseFloat(pr.produto.preco))
                    setQtdTotal(parseInt(qtdTotal) + 1)
                    return {
                        ...item,
                        quantidadeCompra: (parseInt(pr.quantidadeCompra) + 1),
                        vlTotalPr: item.produto.preco * (parseInt(pr.quantidadeCompra) + 1),
                    };
                }
                return item;
            });
            setCarrinho(carrinhoAtualizado);
        }
    }

    const removerProduto = (pr) => {
        const carrinhoAtualizado = carrinho.filter((item) => item.produto.id !== pr.produto.id);
        setCarrinho(carrinhoAtualizado);
        setQtdTotal(qtdTotal - pr.quantidadeCompra)
        setVlTotal(parseFloat(vlTotal) - parseFloat(pr.vlTotalPr))
    }

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        navigate("/pedidos");
    };

    const carrinhoVazio = () => {
        if(carrinho.length === 0){
            return (
                <CarrinhoVazio>
                    <div>
                        <img src={carrinhoVazioLogo} alt="" />
                    </div>
                    <p>Carrinho vazio</p>
                </CarrinhoVazio>
            )
        }
    }

    const limparCarrinho = () => {
        setCarrinho([])
        setQtdTotal(0)
        setVlTotal(0)
    }

    const btnLimparCarrinho = () => {
        if(carrinho.length != 0){
            return (
            <Button style={{width: "60%", margin: "0 auto", display: "block"}} onClick={limparCarrinho}>LIMPAR CARRINHO</Button>
            )
        }
    }

    return (
        <Wrapper>
            <Navbar/>
            <BodyCarrinho>
                <ListaProdutos>
                    {carrinhoVazio()}
                    {carrinho.map((pr, index) => (
                        <div key={index}>
                            <Titulo>
                                <h4>{pr.produto.nome}</h4>
                                <img src='https://cdn-icons-png.flaticon.com/512/484/484662.png' alt="Descrição da imagem" onClick={() => {removerProduto(pr)}}/>
                            </Titulo>
        
                            <CartContainer>
                                <Produto>
                                    <ProdutoImg>
                                        <img src={pr.produto.imgurl} alt="" />
                                    </ProdutoImg>

                                    <div style={{width: '60%', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                                        <p>{pr.produto.descricao}</p>
                                        <h3>R$ {pr.produto.preco}</h3>
                                    </div>
                                </Produto>
                            
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: '20%', alignItems: "end"}}>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                        <div className="quantidade-container">
                                            <button className="botao-diminuir" onClick={() => {diminuirQtd(pr)}}>-</button>
                                            <div className="quantidade">{pr.quantidadeCompra} </div>
                                            <button className="botao-aumentar" onClick={() => {aumentarQtd(pr)}}>+</button>
                                        </div>
                                    </div>
                                    <h3>R$ {pr.vlTotalPr.toFixed(2)}</h3>
                                </div>
                            </CartContainer>
                        </div>
                    ))}

                    {btnLimparCarrinho()}
                </ListaProdutos>
        
        
                <Infos>
                    <div>
                        <h3 style={{marginBottom: '29px'}}>Resumo da Compra:</h3>
                        <Infos2>
                            <div style={{textAlign: 'left', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                                <div>
                                    <p style={{marginBottom: '15px'}}>Produtos ({qtdTotal})</p>
                                    <p>frete</p>
                                </div>
                            </div>

                            <div>
                                <div style={{textAlign: 'left', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                                    <h5 style={{marginBottom: '15px'}}>R$ {vlTotal.toFixed(2)}</h5>
                                    <h5 style={{color: "green"}}>GRATIS</h5>
                                </div>
                            </div>
                        </Infos2>
                    </div>
                    <div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h5>TOTAL: </h5>
                            <h4>R$ {vlTotal.toFixed(2)}</h4>
                        </div>
                        <hr />
                        <Button onClick={comprar}>COMPRAR</Button>

                        <div>
                            {showModal && (
                                <div className="modal-background">
                                    <div className="modal">
                                        <span className="close-button" onClick={closeModal}>
                                        &times;
                                        </span>
                                        <h2>Compra Efetuada com Sucesso</h2>
                                        <br />
                                        <div style={{width: '60px', height: '60px', margin: 'auto'}}>
                                            <img src="https://cdn-icons-png.flaticon.com/512/6815/6815043.png" alt="" />
                                        </div>
                                        <br />
                                        <p>Agradecemos por sua compra! Sua transação foi concluída com êxito. Esperamos que desfrute do seu novo item e estamos à disposição para qualquer assistência adicional.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Infos>
  
            </BodyCarrinho>
            <Footer />
        </Wrapper>
    )

}

export default Carrinho
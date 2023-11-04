import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { api } from "../../api/api";
import { CarrinhoContext } from "../../context/CarrinhoContext";
// import { background} from "../../img/background.jpg"

const CartContainer = styled.div`
    padding: 12px;
    height: 130px;
    width: 100%;
    background-color: #ffffff;
    /* box-shadow: -0.5px 0.5px 13px #945eeb7d; */
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
  background-color: #945eeb;
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
    background-color: #6219d8;
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
    height: 60%;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px #8f8f8f;
    border-radius: 6px;
    text-align: center;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    min-width: 150px;
    max-width: 150px;
    /* box-shadow: 2px 2px 15px #7c7c7c; */
    /* border: 1px solid black; */
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
    width: 100vw;
    height: 100vh;
    /* background: url('https://c4.wallpaperflare.com/wallpaper/244/150/511/simple-background-texture-wallpaper-preview.jpg'); */
    background-size: cover;
    background-position: center center;
    /* filter: grayscale(100%); */
`;

const GreenButton = styled.button`
  background-color: #945eeb;
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
    background-color: #6219d8;
    box-shadow: none;
  }
`;

const QtdButton = styled.button`
    /* padding: 5px; */
    width: 20px;

    height: 20px;
    margin: 0 8px 0 8px;
    font-size: 20px;
    background: #945eeb;
    color: white;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    box-shadow: -1px 1px 3px black;

    &:hover{
        background: #6219d8;
        box-shadow: none;
        /* font-size: 12px; */
    }
`;

const RemoverButton = styled.button`
    width: 73px;
    height: 25px;
    margin: 2px;
    background: #945eeb;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    box-shadow: -1px 1px 3px black;

    &:hover{
        background: #6219d8;
        box-shadow: none;
        font-size: 13px;
    }
`;

const Titulo = styled.div`
    padding: 12px;
    height: 40px;
    width: 100%;
    background-color: #945eebc5;
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



const Carrinho = () => {
    
    const navigate = useNavigate()
    const { carrinho, setCarrinho, prCarrinho, vlTotalPr, vlTotal, qtdPr} = useContext(CarrinhoContext);
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [img, setImg] = useState("")
    const [preco, setPreco] = useState("")
    const [quantidade, setQuantidade] = useState("")
    //const [vlTotal, setVlTotal] = useState(0)

    const frete = 0
    const vlTotalCompra = preco * quantidade;
    //const vlTotal = vlTotalCompra + frete;

    // useEffect(() => {
    //     const buscarProdutos = async () => {
    //         try {
    //             const response = await api.get(`/produtos/1`);
    //             setNome(response.data.nome);
    //             setDescricao(response.data.descricao)
    //             setImg(response.data.imgurl)
    //             setPreco(response.data.preco)
    //             setQuantidade(response.data.quantidade)
    //         } catch (error) {
    //             console.error("Erro ao buscar produtos:", error);
    //         }
    //     };
        
    //     buscarProdutos();
    // }, []);
    
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

    function aumentarQtd(pr) {
        //e.preventDefault()
        pr.quantidadeCompra = pr.quantidadeCompra + 1
        console.log(pr.quantidade)
    }

    const handleExibirProdutoParaTeste = () => {
        navigate('/produto/2')
    }

    return (
    <BodyCarrinho>
        <ListaProdutos>
            {carrinho.map((pr, index) => (
                <>
                    <Titulo>
                        <h4>{pr.produto.nome}</h4>
                        {/* <RemoverButton onClick={() => {diminuirQtd(pr)}}>Remover</RemoverButton> */}
                        <img src='https://cdn-icons-png.flaticon.com/512/484/484662.png' alt="Descrição da imagem" onClick={() => {diminuirQtd(pr)}}/>
                    </Titulo>
                <CartContainer key={index}>
                    <Produto>
                    <ProdutoImg>
                        <img src={pr.produto.imgurl} alt="" />
                    </ProdutoImg>
                    <div style={{width: '60%', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        {/* <h4 style={{marginBottom: '20px', marginTop: '6px'}}>{pr.produto.nome}</h4> */}
                        <p>{pr.produto.descricao}</p>
                        <h3>R$ {pr.produto.preco}</h3>
                    </div>
                    </Produto>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: '20%', alignItems: "end"}}>

                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        {/* <h4>Quantidade: <QtdButton onClick={() => {diminuirQtd(pr)}}>-</QtdButton>  */}
                        
                        {/* <QtdButton onClick={() => {aumentarQtd(pr)}}>+</QtdButton></h4> */}
                        <div class="quantidade-container">
                            <button class="botao-diminuir">-</button>
                            <div class="quantidade">{pr.quantidadeCompra} </div>
                            <button class="botao-aumentar">+</button>
                        </div>
                    </div>
                        
                        <h3>R$ {pr.vlTotalPr.toFixed(2)}</h3>
                  
                    </div>
                </CartContainer>
                </>
            ))}
        </ListaProdutos>
        
        
        <Infos>
            <div>
            <h3 style={{marginBottom: '29px'}}>Resumo da Compra:</h3>
            <Infos2>
                <div style={{textAlign: 'left', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div>
                        <p style={{marginBottom: '15px'}}>Produtos ({qtdPr})</p>
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
            <GreenButton onClick={comprar}>COMPRAR</GreenButton>    
            </div>
        </Infos>
  
    </BodyCarrinho>
    )

}

export default Carrinho
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { api } from "../../api/api";
import { CarrinhoContext } from "../../context/CarrinhoContext";

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



const Produto = () => {
    const { id } = useParams()

    const { carrinho, setCarrinho, handleAddCarrinho, quantidadeCompra, setQuantidadeCompra } = useContext(CarrinhoContext);
    const [produto, setProduto] = useState(null);
    const [quantidade, setQuantidade] = useState("")
    // const [quantidadeCompra, setQuantidadeCompra] = useState("")


    //testes
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [img, setImg] = useState("")
    const [preco, setPreco] = useState("")

    //const frete = 0
    //const vlTotalCompra = preco * quantidade;
    //const vlTotal = vlTotalCompra + frete;

    useEffect(() => {
        const buscarProdutos = async () => {
            
            try {
            const response = await api.get(`/produtos/${id}`);
                setProduto(response.data);

                //testes
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

    // const handleAddCarrinho = (e) => {
    //     e.preventDefault()
    //     console.log(produto)
    //     console.log(quantidadeCompra)
    //     if (carrinho.some((pr) => pr.id === produto.id)) {
    //         alert("produto já adicionado no carrinho")
    //     }else{
    //         if(quantidadeCompra > quantidade){
    //             alert("Estoque insuficiente")
    //         }else{
    //             setCarrinho([...carrinho, produto])
    //         }
    //     }
    //     console.log(carrinho)
    // }

    //teste
    const inserir = (produto) => {
        if(quantidadeCompra == '' || quantidadeCompra === 'e'){
            alert("Você está brincando, certo? Você precisa comprar pelo menos um produto!")
        }else{

            handleAddCarrinho(produto)
        }
    }

    const handleQuantidadeChange = (e) => {
        //const qtd = e.target.value;
        setQuantidadeCompra(e.target.value);
      };

    return (
        <BodyCarrinho>
        <CartContainer> 
            {/* <Produto2>  */}
                <ProdutoImg>
                    <img src={img} alt="" />
                </ProdutoImg>

                <ListaProdutos>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <h2 style={{marginBottom: '20px', marginTop: '6px'}}>{nome}</h2>
                        <h2 style={{marginBottom: '20px', marginTop: '6px'}}>R$ {preco}</h2>
                        <p>{descricao}</p>
                    </div>
                {/* </Produto2> */}
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <p>Quantidade: </p> 
                        <input type="number" onChange={handleQuantidadeChange}/> ({quantidade}) disponivel
                        </div>
                        <GreenButton onClick={() => {inserir(produto)}}>ADICIONAR AO CARRINHO</GreenButton>
                    </div>
                </ListaProdutos>
        </CartContainer>
        </BodyCarrinho>
    )

}

export default Produto
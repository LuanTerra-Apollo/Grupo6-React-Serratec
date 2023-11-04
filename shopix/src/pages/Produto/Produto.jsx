import CardProduto from "../../components/components/CardProduto"
import { Wrapper } from "../../components/styles/Wrapper.style"
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { api } from "../../api/api";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import Navibar from "../../components/components/navibar/navibar";




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
        <Wrapper>
            <CardProduto img={img} nome={nome} preco={preco} descricao={descricao} quantidade={quantidade} produto={produto} inserir={inserir()} handleQuantidadeChange={handleQuantidadeChange()} />
        </Wrapper>
    )
}

export default Produto
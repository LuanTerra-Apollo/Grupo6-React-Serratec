import styled from "styled-components";


const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 348px;
    height: 388px;
    background-color: red;
`
const DivImg = styled.div`
    
    object-fit: contain;
    width: auto;
    height: 223px;

    img {
        height: 100%;
        width: 100%;
    }
`
const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    #preco {
        font-size: 36px;
    }

    #nome {
        font-size: 24px;
    }
`


const ProdutoCard = () => {
  return (

    <DivCard>
        <DivImg>
            <img src="https://images.kabum.com.br/produtos/fotos/sync_mirakl/313525/Cadeira-Gamer-Prizi-At-120-Kg-Com-Almofadas-Roxa-PZ1006E_1682518132_gg.jpg" alt="" />
        </DivImg>
        <DivInfo>
            <p id="preco">preco</p>
            <p id="nome">nome</p>
        </DivInfo>
    </DivCard>
  );
}

export default ProdutoCard;
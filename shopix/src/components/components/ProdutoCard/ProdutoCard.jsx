import styled from "styled-components";


const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 18rem;
    height: 24.25rem;
    box-shadow: none;
    border-radius: 1.2rem;

    &:hover {
        box-shadow: 0px 10px 10px rgba(0,0,0, .2);
        cursor: pointer;

        transition: 0.7s;
    }

    @media (max-width: 1000px) {

        width: 12rem;
        height: 18.25rem;

        div:first-child {
           width: 12rem;
           height: 12rem;
        }

        div:nth-child(2) {
            
            #preco {
                font-size: 1.5rem;
            }

            #parcela {
                font-size: 0.75rem;
            }

            #nome {
                font-size: 1rem;
            }
        }
    }


`
const DivImg = styled.div`
    
    width: 100%;
    
    height: 16rem;
    min-height: 16rem;
    background-color: #fff;
    
    background-position: center;
    border-top-right-radius: 1.2rem;
    border-top-left-radius: 1.2rem;
    
    img {
        border-top-right-radius: 1.2rem;
        border-top-left-radius: 1.2rem;
        
        object-fit: contain;

        height: 100%;
        width: 100%;

        min-height: 100%;
        min-width: 100%;

        max-width: 100%;
        max-height: 100%;
    }
`
const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    padding: 0.5rem;

    border-bottom-left-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
    
    background-color: #fff;
    
    #preco {
        font-size: 2.25rem;
        color: black;
        align-self: flex-start;
    }
    
    #parcela {
        color: green;
        margin-left: 0.5rem;
        font-size: 1rem;
    }
    
    #nome {
        font-size: 1.4rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: black;
    }
`


const ProdutoCard = ({ nome, preco, imgurl }) => {
  return (
    <DivCard>
        <DivImg>
            <img src={imgurl} alt="" />
        </DivImg>
        <DivInfo>
            <p id="preco">R${preco}</p>
            <p id="parcela">em 3x R$ {((preco + 100) / 3).toFixed(2)} sem juros</p>
            <p id="nome">{nome}</p>
        </DivInfo>
    </DivCard>
  )
}

export default ProdutoCard;
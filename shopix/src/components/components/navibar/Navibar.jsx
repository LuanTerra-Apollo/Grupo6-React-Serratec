import logo from '../../../img/shopix.png'
import { Link } from "react-router-dom";
import boneco from '../../../img/boneco.png'
import styled from 'styled-components';
import carrinho from '../../../img/carrinho.png'
import { InputBarraPesquisa } from '../../styles/Inputs.style';


const Navi = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: rgb(100, 41, 139);
    height: 50px;
    align-items: center;

    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    @media  (max-width: 854px){

        .Pesquisa{
            width:400px;
            height: 30px;
        }

        .EntraRegitrar{
            font-size: 10px;
        }

        .DireitaNav{
            padding-right: 30px;

        }
        .User{
            width: 20px;
            height: 20px;
        }
        .Car{
            width: 25px;
            height: 25px;
        }
    }
        
    
`


const Marca = styled.div`
  
    width: 200px;
    height: 45px;

    .Marca{
        
        &:hover{
            -webkit-filter: drop-shadow(5px 5px 5px #df6fda);
             filter: drop-shadow(6px 4px 4px #df6fda);
        
        }
    }
    

`
const Car = styled.div`
    width: 30px;
    height: 30px;
    margin: 20px;

    &:hover{
        -webkit-filter: drop-shadow(5px 5px 5px #df6fda);
        filter: drop-shadow(6px 4px 4px #df6fda);
    }
 
`
const User = styled.div`
    width: 30px;
    height: 30px;
    margin-right:10px;


`
const DireitaNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 65px;

.EntrarRegistrar{
        color:white;
        text-decoration: none;


&:hover{
        color:#df6fda ;
        -webkit-filter: drop-shadow(5px 5px 5px #df6fda);
        filter: drop-shadow(6px 4px 4px #df6fda);
            }
    }
`


const Navibar = () => {
    return (
        <Navi >
            <Marca>
                <Link className='Marca' to ='/'><img src={logo} /></Link>
            </Marca>

            <div>
                <InputBarraPesquisa className='Pesquisa' type="text" placeholder='pesquisar' />
            </div>

            <DireitaNav className='DireitaNav'>
                <User className='User'>
                    <img src={boneco} alt="" />
                </User>


                <Link className='EntrarRegistrar' to='/login'>Entre/Registrar</Link>


                <Car className='Car'>
                    <Link to='/carrinho'>  <img src={carrinho} alt="" /></Link>
                </Car>
            </DireitaNav>
        </Navi>
    )

}

export default Navibar
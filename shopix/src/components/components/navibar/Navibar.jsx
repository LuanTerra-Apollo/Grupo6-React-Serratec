import logo from '../../../img/shopix.png'
import { Link } from "react-router-dom";
import boneco from '../../../img/boneco.png'
import styled from 'styled-components';
import carrinho from '../../../img/carrinho.png'


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
`;

const Marca = styled.div`
  
    width: 200px;
    height: 45px;
    

`
const Car = styled.div`
    width: 30px;
    height: 30px;
    margin: 20px;
 
`
const User =styled.div `
    width: 30px;
    height: 30px;
    margin-right:5px;


`
const DireitaNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const  Navibar = () => {
    return(
        <Navi >
            <Marca>
                <img src={logo} />
            </Marca>
            
            <div>
                <input type="text" />
            </div>
            
            <DireitaNav>
                <User>
                    <img src={boneco} alt="" />
                </User>
                <div>
                    <Link to = '/login' style={{color:'white',textDecoration:'none'}}>Entre/Registrar</Link> 
                </div>

                <Car>
                    <Link to = '/carrinho'>  <img src={carrinho}alt="" /></Link>
                </Car>
            </DireitaNav>
        </Navi>
    )

}

export default Navibar
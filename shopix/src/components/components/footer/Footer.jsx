import styled from "styled-components"
import linkedinLogo from '../../../img/linkedin.png'
import githubLogo from '../../../img/github.png'
import { Link } from "react-router-dom"

const FooterBody = styled.div`
    width: 100%;
    height: 15rem;
    background: linear-gradient(180deg, rgba(255,255,255,1) 80%, rgba(100,41,139,1) 97%);
    bottom: 0px;
    position: relative;
    display: grid;
    grid-template-rows: 1fr 2.3fr;

    @media (max-width: 410px) {
        grid-template-rows: 1fr 0fr;
    }
`
const DivTitulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    
    
    #titulo {
        font-size: 3rem;
    }
`
const DivInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 410px) {
        display: none;
    }
`

const DivInfoPessoal = styled.div`
    display: flex;
    flex-direction: column;

    #tituloPessoa {
        font-size: 2rem;
        
    }

    #redesocial {
        margin-top: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        
        p {
            font-size: 1.7rem;
        }

        img {
            margin-right: 0.5rem;
            margin-left: 0.5rem;
            height: 1.7rem;
            width: 1.7rem;
        }
    }

    @media (max-width: 1300px) {
        
        #tituloPessoa {
        font-size: 1.5rem;
        
        }

        #redesocial {
            p {
                font-size: 1rem;
            }

            img {
                height: 1rem;
                width: 1rem;
            }
        }
    }

    @media (max-width: 895px) {
        
        #tituloPessoa {
        font-size: 1rem;
        
        }

        #redesocial {

            p {
                font-size: 0.5rem;
            }

            img {
                height: 0.5rem;
                width: 0.5rem;
            }
        }
    }
`

const Footer = () => {
    
    return (
        <FooterBody>
            <DivTitulo>
                <p id="titulo">Shopix</p>
            </DivTitulo>
            <DivInfo>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Gabriel Teixeira</p>
                    <Link style={{cursor:'pointer'}} to='https://www.linkedin.com/in/gabriel-silva-teixeira/' target='_blank'>
                        <div id="redesocial">
                            <img src={linkedinLogo}></img>
                            <p style={{color: 'black'}}>Linkedin</p>
                        </div>
                    </Link>
                    <Link style={{cursor:'pointer'}} to='https://github.com/GabSTeixeira' target='_blank'>
                        <div id="redesocial">
                            <img src={githubLogo}></img>
                            <p style={{color: 'black'}}>Github</p>
                        </div>
                    </Link>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Michael Vieira</p>
                    <Link style={{cursor:'pointer'}} to='https://www.linkedin.com/in/michaelvieira021/' target='_blank'>
                        <div id="redesocial">
                            <img src={linkedinLogo}></img>
                            <p style={{color: 'black'}}>Linkedin</p>
                        </div>
                    </Link>
                    <Link style={{cursor:'pointer'}} to='https://github.com/MichaelVieira021' target='_blank'>
                        <div id="redesocial">
                            <img src={githubLogo}></img>
                            <p style={{color: 'black'}}>Github</p>
                        </div>
                    </Link>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Fabiana Audi</p>
                    <Link style={{cursor:'pointer'}} to='https://www.linkedin.com/in/fabianaaudi/' target='_blank'>
                        <div id="redesocial">
                            <img src={linkedinLogo}></img>
                            <p style={{color: 'black'}}>Linkedin</p>
                        </div>
                    </Link>
                    <Link style={{cursor:'pointer'}} to='https://github.com/Fabiaudi' target='_blank'>
                        <div id="redesocial">
                            <img src={githubLogo}></img>
                            <p style={{color: 'black'}}>Github</p>
                        </div>
                    </Link>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Bruna Zimbrão</p>
                    <Link style={{cursor:'pointer'}} to='https://www.linkedin.com/feed/' target='_blank'>
                        <div id="redesocial">
                            <img src={linkedinLogo}></img>
                            <p style={{color: 'black'}}>Linkedin</p>
                        </div>
                    </Link>
                    <Link style={{cursor:'pointer'}} to='https://github.com/brunazimbrao' target='_blank'>
                        <div id="redesocial">
                            <img src={githubLogo}></img>
                            <p style={{color: 'black'}}>Github</p>
                        </div>
                    </Link>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Manoel Vitor</p>
                    <Link style={{cursor:'pointer'}} to='https://www.linkedin.com/in/manoel-vitor-laque-costa-859a92234/' target='_blank'>
                        <div id="redesocial">
                            <img src={linkedinLogo}></img>
                            <p style={{color: 'black'}}>Linkedin</p>
                        </div>
                    </Link>
                    <Link style={{cursor:'pointer'}} to='https://github.com/VitorLack' target='_blank'>
                        <div id="redesocial">
                            <img src={githubLogo}></img>
                            <p style={{color: 'black'}}>Github</p>
                        </div>
                    </Link>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Luan Terra</p>
                    <Link style={{cursor:'pointer'}} to='https://www.linkedin.com/in/luan-c-3b85a597/' target='_blank'>
                        <div id="redesocial">
                            <img src={linkedinLogo}></img>
                            <p style={{color: 'black'}}>Linkedin</p>
                        </div>
                    </Link>
                    <Link style={{cursor:'pointer'}} to='https://github.com/LuanTerra-Apollo' target='_blank'>
                        <div id="redesocial">
                            <img src={githubLogo}></img>
                            <p style={{color: 'black'}} >Github</p>
                        </div>
                    </Link >
                </DivInfoPessoal>
            </DivInfo>
        </FooterBody>
    )
}

export default Footer
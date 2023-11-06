import styled from "styled-components"
import linkedinLogo from '../../../img/linkedin.png'
import githubLogo from '../../../img/github.png'

const FooterBody = styled.div`
    width: 100%;
    height: 15rem;
    background: linear-gradient(180deg, rgba(255,255,255,1) 80%, rgba(100,41,139,1) 97%);
    bottom: 0px;
    
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
                    <div id="redesocial">
                        <img src={linkedinLogo}></img>
                        <p>Linkedin</p>
                    </div>
                    <div id="redesocial">
                        <img src={githubLogo}></img>
                        <p>Github</p>
                    </div>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Michael Vieira</p>
                    <div id="redesocial">
                        <img src={linkedinLogo}></img>
                        <p>Linkedin</p>
                    </div>
                    <div id="redesocial">
                        <img src={githubLogo}></img>
                        <p>Github</p>
                    </div>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Fabiana Audi</p>
                    <div id="redesocial">
                        <img src={linkedinLogo}></img>
                        <p>Linkedin</p>
                    </div>
                    <div id="redesocial">
                        <img src={githubLogo}></img>
                        <p>Github</p>
                    </div>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Bruna Zimbrão</p>
                    <div id="redesocial">
                        <img src={linkedinLogo}></img>
                        <p>Linkedin</p>
                    </div>
                    <div id="redesocial">
                        <img src={githubLogo}></img>
                        <p>Github</p>
                    </div>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Manoel Vitor</p>
                    <div id="redesocial">
                        <img src={linkedinLogo}></img>
                        <p>Linkedin</p>
                    </div>
                    <div id="redesocial">
                        <img src={githubLogo}></img>
                        <p>Github</p>
                    </div>
                </DivInfoPessoal>
                <DivInfoPessoal>
                    <p id="tituloPessoa">Luan Terra</p>
                    <div id="redesocial">
                        <img src={linkedinLogo}></img>
                        <p>Linkedin</p>
                    </div>
                    <div id="redesocial">
                        <img src={githubLogo}></img>
                        <p>Github</p>
                    </div>
                </DivInfoPessoal>
                
            </DivInfo>

        </FooterBody>
    )

}

export default Footer
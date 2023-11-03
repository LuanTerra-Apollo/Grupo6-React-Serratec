import styled from 'styled-components'

export const FormLogin = styled.form`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    min-width: 480px;
    min-height: 560px;
    background-color: ${({theme}) => theme.colors.geralWhite};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    h1 {
        font-size: 60px;
        margin-top: 24px;
        margin-bottom: 60px;
    }

    .Cadastre-se {
        position: absolute;
        transform: translate(0%, 870%);
        color: #007094;
        font-weight: bold;
        font-size: 150%;
    }

    .InputLogin {
        margin-bottom: -36px
    }
    
    @media (max-width: 1280px) {
        min-width: 360px;
        min-height: 400px;

        .Cadastre-se {
        position: absolute;
        transform: translate(0%, 650%)
        }

        .InputLogin {
            margin-bottom: -16px
        }
    }
    @media (max-width: 854px) {
        min-width: 240px;
        min-height: 320px;

        h1 {
            font-size: 48px;
            margin-top: 24px;
            margin-bottom: 36px;
        }

        .BotaoLogin {
            margin-bottom: 10px;
            font-size: 20px;
        }

        .Cadastre-se {
            font-size: 16px;
            position: absolute;
            transform: translate(0%, 740%)
        }

        .InputLogin {
        margin-bottom: 0px
        }

        input {
            font-size: 16px;

            &::placeholder{
                font-size: 16px;
            }
        }
    }

`

export const Form = styled.form`
    width: ${(prop) => prop.width};
    height: ${(prop) => prop.height};
    min-width: 480px;
    min-height: 560px;
    background-color: ${({theme}) => theme.colors.geralWhite};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
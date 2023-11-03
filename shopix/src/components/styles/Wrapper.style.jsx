import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.wrapperGray};
    display: flex;
    align-items: center;
    justify-content: center;
    
    

    & a {
        color: inherit;
        text-decoration: none;
    }
`
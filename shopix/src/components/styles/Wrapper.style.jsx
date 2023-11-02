import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.wrapperGray};

    & a {
        color: inherit;
        text-decoration: none;
    }
`
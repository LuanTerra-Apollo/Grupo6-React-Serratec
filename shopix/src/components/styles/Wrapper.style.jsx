import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: ${({theme}) => theme.colors.wrapperGray};

    & a {
        color: inherit;
        text-decoration: none;
    }
`
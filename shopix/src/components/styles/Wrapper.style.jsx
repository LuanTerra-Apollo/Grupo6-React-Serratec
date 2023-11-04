import styled from 'styled-components'

export const Wrapper = styled.div`

    width: 100%;
    height: 100vh;
    background-size: cover;
    background-color: ${({theme}) => theme.colors.wrapperGray};
    display: flex;
    align-items: center;
    justify-content: center;
`
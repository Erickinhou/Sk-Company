import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: #00A3E2;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    h1, h2{
        font-size: 1.3rem;
    }
    h3{
        font-size: 1.2rem;
    }

    h4{
        font-size: 1.1rem;
    }   

    h5, h6{
        font-size: 1rem;
    }
`

export const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #00A3E2;
    font-family: 'Poppins', sans-serif;
    h1, h2{
        font-size: 1.5rem;
    }
    h3{
        font-size: 1.4rem;
    }

    h4{
        font-size: 1.3rem;
    }   

    h5, h6{
        font-size: 1.2rem;
    }
`

export const LoadingContainer = styled.div`
    display: flex;
    background-color: #00A3E2;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const CheckContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #00A3E2;
    h1, h2{
        font-size: 2.5rem;
    }
    h3{
        font-size: 2rem;
    }

    h4{
        font-size: 2rem;
    }   

    h5, h6{
        font-size: 1.2rem;
    }
    span{
        font-size: 1.2rem;
    }
    div{
        font-size: 2rem;
    }
    p{
        font-size: 1.5rem;
    }
    height: 100vh;
`;
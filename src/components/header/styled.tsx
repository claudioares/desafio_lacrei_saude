import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100%;
    height: 11rem;

    background-color: #F5FFFB;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 14rem;

    /* Estilos para celulares */
    @media (max-width: 768px) {
        padding:0 2rem;
    }
    
`
export const DivBotton = styled.div`
    width: auto;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

     /* Estilos para tablets */
     @media (max-width: 1023px) and (min-width: 768px) {
        display: none;
    }

    /* Estilos para celulares */
    @media (max-width: 768px) {
        display: none;
    }
`

export const DivBottonMobile = styled.div`
    display: none;
    @media (max-width: 1023px) and (min-width: 768px) {
        display: flex;

        width: auto;
        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }

    /* Estilos para celulares */
    @media (max-width: 768px) {
        display: flex;

        width: auto;
        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
`
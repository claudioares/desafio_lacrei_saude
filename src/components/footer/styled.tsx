import styled from "styled-components";

export const ContainerFooter = styled.footer`
        width: 100%;
        height: 17.7rem;

        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        padding: 0 7.7rem;
        margin: 3rem 0;

        /* Estilos para celulares */
        @media (max-width: 767px) {
            padding: 0;
        }
    
`
export const ContentAll = styled.div `
    display: flex;
    align-items: center;
    gap: 5rem;

    @media (max-width: 1023px) and (min-width: 768px) {
        flex-direction: column-reverse;
    }

    /* Estilos para celulares */
    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
`
export const SectionPrimary = styled.section `
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6.6rem;

    /* Estilos para tablets */
    @media (max-width: 1023px) and (min-width: 768px) {
        width: 100%;
        #footer__logo{
            display: none;
        }
    }

    /* Estilos para celulares */
    @media (max-width: 767px) {
        width: 100%;
        #footer__logo{
            display: none;
        }
    }
`
export const ContainerIcons = styled.div `
    display: flex;
    gap: 1.6rem;
`

export const SectionSecundary = styled.section`
    display: flex;
    flex-wrap:wrap;
    gap: 6rem;

    width: 70%;
    height: 100%;

    /* Estilos para tablets */
    @media (max-width: 1023px) and (min-width: 768px) {
        width: 100%;
        gap: 4rem;
    }

    /* Estilos para celulares */
    @media (max-width: 767px) {
        width: 100%;
        gap: 4rem;
    }
    
`
import styled from "styled-components";


export const ContainerSection =styled.section `
    width: 50% ;
    height: 100%;

    display: flex;
    flex-direction: column;

    /* Estilos para tablets */
    @media (max-width: 1023px) and (min-width: 768px) {
        width: 100%;
    }

    /* Estilos para celulares */
    @media (max-width: 767px) {
        width: 100%;
    }
`
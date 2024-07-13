import styled from "styled-components";



export const ContainerBunner = styled.div<{ $fly: any }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


    width: 100%;
    min-height: calc(100vh - 9.7rem);

    background: linear-gradient(154deg, rgba(2, 0, 36, 0.945) 0%, rgba(6, 13, 9, 0.87) 35%, rgba(37, 28, 28, 0.822) 100%), url(${props => props.$fly});
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;

    padding: 18rem;
    gap: 1.5rem;

    /* Estilos para tablets */
    @media (max-width: 1023px) and (min-width: 768px) {
        padding: 5rem;
    }

   
    h1{
        color: #018762;
        font-size: 5.5rem;
    }
    p{
        font-size: 3rem;
        color: #BFBFBF;
    }

    /* Estilos para celulares */
    @media (max-width: 767px) {
        padding: 2.5rem;
        h1{
            font-size: 3.5rem;
        }
        p{
            font-size: 2rem;
        }
    }
`
export const DivButton = styled.div`
    display: flex;
    gap: 1.5rem;

    /* Estilos para celulares */
    @media (max-width: 767px) {
      flex-direction:column;
    }
`
import styled from "styled-components";

export const ContainerAdvancedSeach = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 8rem 8rem;

    max-width: 100%;
    min-height: 100%;

     /* Estilos para tablets */
     @media (max-width: 1023px) and (min-width: 768px) {
        flex-direction: column-reverse;
        padding: 8rem;
    }

    /* Estilos para celulares */
    @media (max-width: 767px) {
        flex-direction: column-reverse;
        padding: 4rem;
    }
`
export const DivSection = styled.div `
    display: flex;
    flex-direction:column;
    gap: 1.5rem;

    h1{
        color: #018762;
    }
    p{
        font-size: 2rem;
        color: #2D2D2D;
    }
`
export const FormAdvancedSeach = styled.form `
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 1.5rem;
    padding: 1.5rem 0;

    label{
        font-weight: 400px;
        font-size:14px;
        color: #131313;
    }

    #div___professional__gender{
        position: relative;
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    
    input[type="radio"] {
        appearance: none;
        outline: none;
        width: 24px;
        height: 24px;
        border: 2px solid #018762;
        border-radius: 50%;
        cursor: pointer;
    }

    input[type="radio"]:checked::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 1.9%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #018762; /* Cor de fundo verde quando selecionado */
        z-index: -1;
    }

    input[type="radio"]:checked::before {
        content: "";
        width: 12px; 
        height: 12px;
        
        border-radius: 50%;
        background-color: white;

        position: absolute;
        top: 50%;
        left: 1.8%;
        transform: translate(-50%, -50%);
        z-index: 1; /* Acima do background verde */
    }

`
export const DivForm = styled.div `
    display: flex;
    flex-direction:column;

    input, #specialty{
        width: 54.6rem;
        height: 4.8rem;

        border-radius: 0.8rem;
        border: 1px solid #2D2D2D;
        padding: 12px 4px 12px 16px;

        color: #2D2D2D;

        font-weight: 400;
        font-size: 16px;

        /* Estilos para tablets */
        @media (max-width: 1023px) and (min-width: 768px) {
            width: auto; 
        }

        /* Estilos para celulares */
        @media (max-width: 767px) {
            width: auto; 
        }
        
    }
    input:focus{
        outline: none;
        border: 5px double #4D8ACB;
    }
    input:focus::inner-border{
        border: 2px solid #2D2D2D;
    }
    #specialty:focus{
        outline: none;
    }
`
export const DivImage = styled.div`
    width:100%;
    height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;

    /* Estilos para tablets */
    @media (max-width: 1236px) and (min-width: 768px) {
        display: none;
    }

    /* Estilos para celulares */
    @media (max-width: 768px) {
        display: none;
    }
`
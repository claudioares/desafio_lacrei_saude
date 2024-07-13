import styled from "styled-components";


export const ButtonDefault = styled.button<{color:string}>`
    all: unset;
    background: ${props => props.color || 'white'};
    padding: 0 3.2rem;
    color: ${props => props.color ? "white" : "#018762"};
    width: 15.6rem;
    height: 4.8rem;

    border-radius: 0.8rem;
    font-family: Nunito;
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
    line-height: 2.7rem;

    cursor: pointer;

    &:hover {
        background: ${props => props.color ? "#007756" : "#E6F3EF"};
    }
`

export const ButtonMobile = styled.button<{color:string}>`
    all: unset;
    padding: 1rem;
    background: ${props => props.color || 'white'};
    color: ${props => props.color ? "white" : "#018762"};
    border-radius: 1rem;

    width: auto;
    height: auto;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: ${props => props.color ? "#007756" : "#E6F3EF"};
    }
`
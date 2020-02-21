import styled from 'styled-components';

export const Main = styled.main`
    border: 1px solid red;
    max-width: 1200px;
    margin: 0 auto;
`;

export const Button = styled.button`
    background: ${props => props.colorTheme ? "#35D073" : "#77BD8B"};
    color: ${props => props.colorTheme ? "white" : "black"};
    font-size: 1em;
    margin: 1em ;
    padding: 0.25em 1em;
    border-radius: 3px ;
    border: 2px solid #35d073;


    &:hover {
        border: 2px solid #77BD8B;
    }
`;

export const FormData = styled.form`
    border: 2px solid #35D073;
    width: 400px;
    margin: 0 auto;
    padding: 30px;
`;
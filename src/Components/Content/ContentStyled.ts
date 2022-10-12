import styled from "styled-components";

export const Paragraph = styled.p`
    font-size: 25px;
    text-align: center;
    color: #ffffff;
`;

export const TypeContainer = styled.div`
    text-align: center;
    width: 50%;
    height: 79px;

    @media(max-width: 1250px){
        margin: 0 auto;
    }

    @media(max-width: 915px){
        flex-direction: column;
        width: 90%;
        height: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    width: 50%;
    height: 400px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin: 35px 0 0 0;

    @media(max-width: 1250px){
        width: 90%;
        margin: 35px auto;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 15px;
    padding-left: 15px;
`;

export const Button = styled.button`
    width: 30%;
    height: 50px;
    border-radius: 15px;
`;

export const Error = styled.div`
    color: red;
    margin-top: 3px;
    text-align: center;
`;

export const ContainerInput = styled.div`
    width: 50%;
    margin: 0 auto;
`;

export const Content = styled.main`
    max-width: 1250px;
    width: 100%;
    height: 100%;
    margin: 145px auto 0px auto;

    span {
        font-size: 25px;
        color: white;
    }
    
    @media(max-width: 915px){
        margin-top: 50px;
    }
`;

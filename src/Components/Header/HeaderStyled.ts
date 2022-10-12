import styled from 'styled-components';

export const Top = styled.header`
    position: fixed;
    top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1250px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);

    @media(max-width: 1250px){
        justify-content: space-evenly;
    }

    @media(max-width: 915px){
        flex-direction: column;
        position: static;
        width:  90%;
        transform: translateX(0);
        margin: 0 auto;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    width: 100%;

    @media(max-width: 915px){
       flex-direction: column;
       align-items: space-between;
       margin: 20px 0px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const LogoText = styled.h1`
    font-size: 30px;
    weight: bold;
    color: white;
    font-weight: 900;
`;

export const Logo = styled.img`
    width: 25px;
    height: 25px;
`;

export const Link = styled.a`
    color: white;
    font-size: 20px;
    weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        filter: brightness(80%);
    }

    @media(max-width: 915px){
        width: none;
        margin: 5px auto;
    }
`;

export const HorizontalSeparator = styled.div`
    @media(max-width: 915px){
        width: 100%;
        height: 1px;
        background-color: #ffffff;
    }    
`;
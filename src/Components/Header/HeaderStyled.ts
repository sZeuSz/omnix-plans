import styled from 'styled-components';

export const Top = styled.header`
    position: fixed;
    top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1250px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%)
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    width: 100%;
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

&:hover{
    filter: brightness(80%);
}
`;
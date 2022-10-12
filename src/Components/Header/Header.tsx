import React from "react";
import { useNavigate } from "react-router-dom";
import { Top, Container, Logo, LogoText, NavBar, Link, HorizontalSeparator } from "./HeaderStyled";
export default function Header () {

    const navigate = useNavigate();
    
    return (
        <Top>
            <Container onClick={() => navigate("/")}>
                <Logo src="img/logo.png" />
                <LogoText> Omnix Plans </LogoText>
            </Container>
            <NavBar>
                <Link onClick={() => navigate('/')}>Home</Link>
                <HorizontalSeparator />
                <Link href="https://github.com/sZeuSz">Portifolio</Link>
                <HorizontalSeparator />
                <Link href="https://github.com/sZeuSz">Contact US</Link>
                <HorizontalSeparator />
            </NavBar>
        </Top>
    )
}


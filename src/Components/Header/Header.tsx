import React from "react";
import { useNavigate } from "react-router-dom";
import { Top, Container, Logo, LogoText, NavBar, Link } from "./HeaderStyled";
export default function Header () {

    const navigate = useNavigate();
    return (
        <Top>
            <Container onClick={() => navigate("/")}>
                <Logo src="img/logo.png" />
                <LogoText> Omnix Plans </LogoText>
            </Container>
            <NavBar>
                <Link>Home</Link>
                <Link>Portifolio</Link>
                <Link>Contact US</Link>
            </NavBar>
        </Top>
    )
}


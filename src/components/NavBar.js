import styled from "styled-components";
import React from "react";

export default function NavBar() {
    return (
        <Logo>
            <h1>CINEFLIX</h1>
        </Logo>
    );
}

const Logo = styled.div`    
    position: fixed;
    
    top:0px;
    width: 375px;
    height: 67px;
    background-color: #C3CFD9;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        text-align: center;

        color: #E8833A;
    }
`;
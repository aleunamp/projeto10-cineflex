import styled from "styled-components";
import React, { useEffect } from "react";
import axios from 'axios';

export default function DadosDoCliente() {

    function reservarAssento() {
        console.log("funcionou");
    }

    return (
        <>
            <InputComprador>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."></input>

                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."></input>
            </InputComprador>


            <BotãoReserva onClick={reservarAssento}>
                <button><p>Reservar assentos(s)</p></button>
            </BotãoReserva>
        </>
    )
};

const BotãoReserva = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 225px;
        height: 42px;

        margin-top: 62px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #E8833A;
        border-radius: 5px;

        cursor: pointer;
        
        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;

            color: #FFFFFF;
        }
    }
`;

const InputComprador = styled.div`
    margin-top: 42px;
    margin-left: 24px;
    
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #293845;
    }

    input{
        width: 327px;
        height: 51px;

        margin-bottom: 10px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        &::placeholder{
            width: 309px;
            height: 50px;
            
            padding-left: 18px;

            font-family: 'Roboto', sans-serif;
            font-style: italic;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            display: flex;
            align-items: center;

            color: #AFAFAF;
        }
    }
`;
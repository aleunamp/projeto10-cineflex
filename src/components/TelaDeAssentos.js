import styled from "styled-components";
import React from "react";

export default function TelaDeSessões() {
    return (
        <Assentos>
            <h2>Selecione o(s) assentos(s)</h2>

            <Assento>
                <button><p>01</p></button>
            </Assento>

            <LegendaAssentos>
                
            </LegendaAssentos>

            <InputComprador>
            <p>Nome do comprador:</p>
            <input placeholder="Digite seu nome..."></input>

            <p>CPF do comprador:</p>
            <input placeholder="Digite seu CPF..."></input>
            </InputComprador>

            <BotãoReserva>
                <button><p>Reservar assentos(s)</p></button>
            </BotãoReserva>

            <Info>
                <ImagemDoFilme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="imagem do filme"></img>
                </ImagemDoFilme>

                <NomeDoFilme>
                    <p>2067</p>
                    <p>Quinta-feira - 15:00</p>
                </NomeDoFilme>
            </Info>
        </Assentos>
    );
}

const Assentos = styled.div`
    width: 375px;

    margin-top: 107px;

    h2{
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.04em;

        color: #293845;
    }
`;

const Assento = styled.div`
    margin-top: 40px;
    margin-left: 24px;

    button{
        width: 26px;
        height: 26px;

        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;

        cursor: pointer;

        p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;

            color: #000000;
        }
    }
`;

const LegendaAssentos = styled.div`

`

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
            font-family: 'Roboto';
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
        font-family: 'Roboto';
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

            font-family: 'Roboto';
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

const Info = styled.div`
width: 375px;
height: 117px;

position:fixed;
bottom: 0px;

display: flex;
align-items: center;
gap: 14px;

background: #DFE6ED;
border: 1px solid #9EADBA;
`;

const ImagemDoFilme = styled.div`
    width: 64px;
    height: 89px;

    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img{
        width: 48px;
        height: 72px;
    }
`;

const NomeDoFilme = styled.div`
    p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
}
`;
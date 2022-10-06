import styled from "styled-components";
import React, { useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function TelaDeSessões() {
    const { idSessao } = useParams();
    const [sessao, setSessao] = React.useState({});
    const [assentos, setAssentos] = React.useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((resposta) => {
            setSessao(resposta.data.movie);
            setAssentos(resposta.data.seats);
            console.log(resposta.data.seats);
        });

        promise.catch((erro) => {
            console.log(erro.response.data);
        })
    }, []);

    return (
        <Assentos>
            <h2>Selecione o(s) assentos(s)</h2>

            <Assento>
                {assentos.map((a) =>
                    <button key={a.id}><p>{a.name}</p></button>
                )}
            </Assento>

            <LegendaAssentos>
                <Legenda>
                <BotaoLegenda cor="#1AAE9E" borda="#0E7D71"><p></p></BotaoLegenda>
                <p>Selecionado</p>
                </Legenda>

                <Legenda>
                <BotaoLegenda cor="#C3CFD9" borda="#7B8B99"><p></p></BotaoLegenda>
                <p>Disponível</p>
                </Legenda>

                <Legenda>
                <BotaoLegenda cor="#FBE192" borda="#F7C52B"><p></p></BotaoLegenda>
                <p>Indisponível</p>
                </Legenda>
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
                    <img src={sessao.posterURL} alt={sessao.title}></img>
                </ImagemDoFilme>

                <NomeDoFilme>
                    <p>{sessao.title}</p>
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

        font-family: 'Roboto', sans-serif;
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

    display: flex;
    flex-wrap: wrap;
    gap: 7px;

    button{
        width: 26px;
        height: 26px;

        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;

        cursor: pointer;

        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            letter-spacing: 0.04em;

            color: #000000;
        }
    }
`;

const LegendaAssentos = styled.div`
    margin-top: 16px;
    gap: 50px;

    display: flex;
    justify-content: center;

    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;

        color: #4E5A65;
    }
`;

const Legenda = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const BotaoLegenda = styled.button`
    width: 25px;
    height: 25px;
    left: 78px;
    top: 377px;

    background: ${props => props.cor};
    border: 1px solid ${props => props.borda};
    border-radius: 17px;
`;

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
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #293845;
}
`;
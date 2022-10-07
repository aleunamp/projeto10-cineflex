import styled from "styled-components";
import React, { useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import DadosDoCliente from "./DadosDoCliente";

function ComponenteAssento({ id, name, isAvailable, assentosSelecionados, setAssentosSelecionados }) {
    const [clicado, setClicado] = React.useState("assento disponível");
    let arraySelecionados = [...assentosSelecionados];

    function selecionarAssento(name, id) {
        if (clicado === "assento disponível") {
            setClicado("assento selecionado");
            arraySelecionados.push(id);
            setAssentosSelecionados(arraySelecionados);
        }

        else if (clicado === "assento selecionado") {
            setClicado("assento disponível");
            arraySelecionados = arraySelecionados.filter((i) => i !== id);
            setAssentosSelecionados(arraySelecionados);
        }
    }

    if (isAvailable === false) {
        return (
            <BotaoAssento cor="#FBE192" onClick={() => alert("Esse assento não está disponível!")}
                key={id}><p>{name}</p></BotaoAssento>);
    }

    else if (isAvailable === true) {

        if (clicado === "assento disponível") {
            return (
                <BotaoAssento onClick={() => selecionarAssento(name, id)}
                    cor="#C3CFD9" key={id}><p>{name}</p></BotaoAssento >);
        }

        else if (clicado === "assento selecionado") {
            return (
                <BotaoAssento onClick={() => selecionarAssento(name, id)}
                    cor="#1AAE9E" key={id}><p>{name}</p></BotaoAssento >);
        }
    }
}

export default function TelaDeSessões() {
    const { idSessao } = useParams();
    const [filme, setFilme] = React.useState({});
    const [sessao, setSessao] = React.useState({});
    const [dia, setDia] = React.useState({})
    const [assentos, setAssentos] = React.useState([]);
    const [assentosSelecionados, setAssentosSelecionados] = React.useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((resposta) => {
            setFilme(resposta.data.movie);
            setSessao(resposta.data);
            setDia(resposta.data.day);
            setAssentos(resposta.data.seats);
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
                    <ComponenteAssento
                        name={a.name} key={a.id}
                        id={a.id} isAvailable={a.isAvailable}
                        assentosSelecionados={assentosSelecionados}
                        setAssentosSelecionados={setAssentosSelecionados}
                    />
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

            <DadosDoCliente 
            assentosSelecionados={assentosSelecionados}
            />

            <Info>
                <ImagemDoFilme>
                    <img src={filme.posterURL} alt={filme.title}></img>
                </ImagemDoFilme>

                <NomeDoFilme>
                    <p>{filme.title}</p>
                    <p>{dia.weekday} - {sessao.name}</p>
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
`;

const BotaoAssento = styled.div`
    width: 26px;
    height: 26px;
    background: ${props => props.cor};
    border: 1px solid #808F9D;
    border-radius: 12px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

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
`

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
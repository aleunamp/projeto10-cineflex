import styled from "styled-components";
import React, { useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import ClientInfo from "./ClientInfo.js";

function SeatComponent({ id, name, isAvailable, selectedSeat, setSelectedSeat, setNumberSelect, numberSelect }) {
    const [click, setClick] = React.useState("assento disponível");
    let selectedArray = [...selectedSeat];
    let numberArray = [...numberSelect];

    function selectSeat(name, id) {
        if (click === "assento disponível") {
            setClick("assento selecionado");
            selectedArray.push(id);
            numberArray.push(name);
            setSelectedSeat(selectedArray);
            setNumberSelect(numberArray);
        } else if (click === "assento selecionado") {
            setClick("assento disponível");
            selectedArray = selectedArray.filter((i) => i !== id);
            numberArray = numberArray.filter((n) => n !== name);
            setNumberSelect(numberArray);
            setSelectedSeat(selectedArray);
        }
    }

    if (isAvailable === false) {
        return (
            <BotaoAssento cor="#FBE192" onClick={() => alert("Esse assento não está disponível!")}
                key={id}><p>{name}</p></BotaoAssento>);
    }

    else if (isAvailable === true) {
        if (click === "assento disponível") {
            return (
                <BotaoAssento onClick={() => selectSeat(name, id)}
                    cor="#C3CFD9" key={id}><p>{name}</p></BotaoAssento >);
        } else if (click === "assento selecionado") {
            return (
                <BotaoAssento onClick={() => selectSeat(name, id)}
                    cor="#1AAE9E" key={id}><p>{name}</p></BotaoAssento >);
        }
    }
}

export default function SeatsScreen() {
    const { sessionId } = useParams();
    const [movie, setMovie] = React.useState({});
    const [session, setSession] = React.useState({});
    const [day, setDay] = React.useState({})
    const [seats, setSeats] = React.useState([]);
    const [selectedSeat, setSelectedSeat] = React.useState([]);
    const [numberSelect, setNumberSelect] = React.useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then((resposta) => {
            setMovie(resposta.data.movie);
            setSession(resposta.data);
            setDay(resposta.data.day);
            setSeats(resposta.data.seats);
        });

        promise.catch((erro) => {
            console.log(erro.response.data);
        })
    }, []);

    return (
        <Assentos>
            <h2>Selecione o(s) assentos(s)</h2>

            <Assento>
                {seats.map((s) =>
                    <SeatComponent
                        name={s.name} key={s.id}
                        id={s.id} isAvailable={s.isAvailable}
                        selectedSeat={selectedSeat}
                        setSelectedSeat={setSelectedSeat}
                        setNumberSelect={setNumberSelect}
                        numberSelect={numberSelect}
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

            <ClientInfo
                selectedSeat={selectedSeat}
                movie={movie.title}
                day={day.weekday}
                session={session.name}
                numberSelect={numberSelect}
            />

            <Info>
                <ImagemDoFilme>
                    <img src={movie.posterURL} alt={movie.title}></img>
                </ImagemDoFilme>

                <NomeDoFilme>
                    <p>{movie.title}</p>
                    <p>{day.weekday} - {session.name}</p>
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
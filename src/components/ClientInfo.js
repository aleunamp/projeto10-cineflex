import styled from "styled-components";
import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ClientInfo({ selectedSeat, movie, day, session, numberSelect }) {
    const [name, setName] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const navigate = useNavigate();

    function bookSeat(e) {
        e.preventDefault();

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

        const body = {
            ids: selectedSeat,
            name: name,
            cpf: cpf
        };

        const promise = axios.post(URL, body);

        if (numberSelect.length === 0) {
            alert("É necessário selecionar os assentos para continuar!");
        } else if (numberSelect.length !== 0) {
            promise.then(() => {
                navigate("/sucesso", {
                    state: {
                        name: name,
                        cpf: cpf,
                        movie: movie,
                        day: day,
                        session: session,
                        numberSeat: numberSelect
                    }
                })
            });

            promise.catch((erro) => {
                alert(erro.response.data.mensagem);
            });
        }
    }

    return (
        <form onSubmit={bookSeat}>
            <InputComprador>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                ></input>

                <p>CPF do comprador:</p>
                <input
                    placeholder="Digite seu CPF..."
                    type="number"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                ></input>
            </InputComprador>

            <BotãoReserva type="submit">
                <button><p>Reservar assentos(s)</p></button>
            </BotãoReserva>
        </form>
    )
};

const BotãoReserva = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 150px;

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
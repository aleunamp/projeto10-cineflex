import styled from "styled-components";
import React, { useEffect } from "react";
import axios from 'axios';
import { ScrollRestoration, useNavigate } from "react-router-dom";

export default function DadosDoCliente({ assentosSelecionados, filme, dia, sessao, NumAssentosSelecionados }) {
    const [nome, setNome] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const navigate = useNavigate();

    function reservarAssento(e) {
        e.preventDefault();

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

        const body = {
            ids: assentosSelecionados,
            name: nome,
            cpf: cpf
        };

        const promise = axios.post(URL, body);

        if (NumAssentosSelecionados.length === 0) {
            alert("É necessário selecionar os assentos para continuar!");
        }

        else if (NumAssentosSelecionados.length !== 0) {
            promise.then(() => {
                navigate("/sucesso", {
                    state: {
                        nome: nome,
                        cpf: cpf,
                        filme: filme,
                        dia: dia,
                        sessao: sessao,
                        assentosNum: NumAssentosSelecionados
                    }
                })
            });

            promise.catch((erro) => {
                alert(erro.response.data.mensagem);
            });
        }
    }

    return (
        <form onSubmit={reservarAssento}>
            <InputComprador>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
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
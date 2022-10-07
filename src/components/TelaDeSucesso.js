import styled from "styled-components";
import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function TelaDeSucesso() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Final>
            <h2>Pedido feito com sucesso!</h2>

            <FilmeSessão>
                <h3>Filme e sessão</h3>
                <p>{location.state.filme}</p>
                <p>{location.state.dia} - {location.state.sessao} </p>
            </FilmeSessão>

            <Ingressos>
                <h3>Ingressos</h3>
                {location.state.assentosNum.map((a, index) => (
                    <p key={index}>Assento {a}</p>
                ))}

            </Ingressos>

            <Comprador>
                <h3>Comprador</h3>
                <p>Nome: {location.state.nome}</p>
                <p>CPF: {location.state.cpf}</p>
            </Comprador>

            <BotãoInicio onClick={() => navigate("/")}>
                <button><p>Voltar pra Home</p></button>
            </BotãoInicio>
        </Final>
    );
}

const Final = styled.div`
    width: 375px;
    margin-top: 107px;

    h2{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #247A6B;

        margin-top: 40px;
    }
`;

const FilmeSessão = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    h3{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;

        margin-top: 40px;
        margin-bottom: 15px;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }
`;

const Ingressos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;

        margin-top: 40px;
        margin-bottom: 15px;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }
`;

const Comprador = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    h3{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;

        margin-top: 40px;
        margin-bottom: 15px;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }
`;

const BotãoInicio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 225px;
        height: 42px;

        margin-top: 62px;
        margin-bottom: 100px;

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
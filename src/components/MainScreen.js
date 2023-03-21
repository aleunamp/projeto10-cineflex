import styled from "styled-components";
import React, { useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function MainScreen() {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(URL);

        promise.then((resposta) => {
            setMovies(resposta.data);
        });

        promise.catch((erro) => {
            console.log(erro.response.data);
        });
    }, []);

    return (
        <Inicio>
            <h2>Selecione o filme</h2>

            {movies.map((movie) =>
                <Link to={`/sessoes/${movie.id}`} key={movie.id}>
                    <Filme>
                        <img src={movie.posterURL} alt={movie.title}></img>
                    </Filme>
                </Link>
            )}
        </Inicio>
    );
}

const Inicio = styled.div`
    width: 375px;
    margin-top: 107px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    h2{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.04em;

        color: #293845;

        margin-top: 20px;
    }
`;

const Filme = styled.div`
    width: 145px;
    height: 209px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 40px;
    margin-left:30px;

    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img{
        width: 129px;
        height: 193px;

        cursor: pointer;
    }
`;
import styled from "styled-components";

export default function TelaIncial() {
    return (
        <Inicio>
            <h2>Selecione o filme</h2>
            <Filme>
                <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="imagem do filme"></img>
            </Filme>
        </Inicio>
    );
}

const Inicio = styled.div`
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

        margin-top: 40px;
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
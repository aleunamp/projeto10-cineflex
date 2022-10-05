import styled from "styled-components";

export default function TelaDeSessões() {
    return (
        <Sessões>
            <h2>Selecione o horário</h2>

            <Sessão>
                <p>Quinta-feira - 24/06/2021</p>
                <button><p>15:00</p></button>
            </Sessão>

            <Info>
                <ImagemDoFilme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="imagem do filme"></img>
                </ImagemDoFilme>

                <NomeDoFilme>
                    <p>2067</p>
                </NomeDoFilme>
            </Info>
        </Sessões>
    );
}

const Sessões = styled.div`
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

const Sessão = styled.div`
    margin-top: 40px;
    margin-left:30px;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

        color: #293845;
    }

    button{
        width: 83px;
        height: 43px;
        margin-top: 22px;

        background: #E8833A;
        border-radius: 5px;

        cursor: pointer;

        p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.02em;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;
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

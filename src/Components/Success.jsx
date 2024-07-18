import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom';

export default function Success() {
    const location = useLocation();
    const { selectedSeats, name, cpf, seats } = location.state;

    return (
        <>
            <StyleTitle>
                <span>Pedido finalizado!</span>
            </StyleTitle>
            <StyleShow>
                <SessionContent >
                    <StyleSession>
                        <span><b>Filme e sessão</b></span>
                        <hr></hr>
                        <p>{seats.movie.title}</p>
                        <p>{seats.day.date} às {seats.name}</p>
                    </StyleSession>
                    <StyleTicket>
                        <span><b>Ingressos</b></span>
                        <hr></hr>
                        {selectedSeats.map(seat => (
                            <p key={seat.id}>Assento {seat.name}</p>
                        ))}
                    </StyleTicket>
                    <StyleBuyer>
                        <span><b>Comprador(a)</b></span>
                        <hr></hr>
                        <p>Nome: {name}</p>
                        <p>CPF: {cpf}</p>
                    </StyleBuyer>
                    <StyleButton>
                    <Link to="/">
                            <button><b>Voltar para tela inicial</b></button>
                    </Link>
                    </StyleButton>

                </SessionContent>
            </StyleShow>
        </>
    )

}

const StyleButton = styled.div`
margin-top: 80px;

button{
    font-size: 18px;
background-color: #EE897F;
width: 338px;
height: 42px;
border-radius:5px;
}
`

const StyleShow = styled.div`
        display: flex;
        width: 100%;
        height: 550px;
        overflow-y: auto;
        flex-wrap: wrap;
        font-family: 'Sarala',sans-serif;
           
 `

const StyleTitle = styled.div`
      width: 375px;
    height: 67px;
    background-color: #212226;
    position: fixed;
    top: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Sarala',sans-serif;
    
    span{
        size: 24px;
        top: 0px;
        color: #ffffff;
        font-family: 'Sarala',sans-serif;
    }
 `

const SessionContent = styled.div`
    width: 338px;
    height: 390px;
    background-color: #2B2D36;
    display:flex;
    margin-left: 15px;
    margin-top: 15px;
    border-radius: 4px;
    flex-direction: column;
    line-height: 15px;
    span{
        font-size: 20px;
        color: #ffffff;
        margin-top: 20px;
        margin-left: 20px;
    }
    hr{
        width: 90%;
        margin-top: 13px;
        color:#4E5A65;

    }
`

const StyleSession = styled.div`
    margin-top: 20px;
 span{
        font-size: 20px;
        color: #EE897F;
        margin-top: 20px;
        margin-left: 20px;
    }
    hr{
        width: 90%;
        margin-top: 13px;
        color:#4E5A65;
    }
p{
    margin-top:0px;
    margin-left: 15px;
    font-size: 20px;
    color: #ffffff
}
`

const StyleTicket = styled.div`
 span{
        font-size: 20px;
        color: #EE897F;
        margin-top: 20px;
        margin-left: 20px;
    }
    hr{
        width: 90%;
        margin-top: 13px;
        color:#4E5A65;

    }
    p{
    margin-top:0px;
    margin-left: 15px;
    font-size: 20px;
    color: #ffffff
}
`

const StyleBuyer = styled.div`
 span{
        font-size: 20px;
        color: #EE897F;
        margin-top: 20px;
        margin-left: 20px;
    }
    hr{
        width: 90%;
        margin-top: 13px;
        color:#4E5A65;

    }
    p{
    margin-top:0px;
    margin-left: 15px;
    font-size: 20px;
    color: #ffffff
}
`
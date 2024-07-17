import styled from 'styled-components'
// import { useState } from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Success() {

    const { filmeId } = useParams();
    const [session, setSession] = useState(null);
    console.log(filmeId);


    // useEffect(() => {

    //     axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeId}/showtimes`)

    //     .then((response) => setSession(response.data))

    //     .catch((error) => console.log(error.response.data))
    // }, []);

    // if(session=== null){
    //     return <div>Carregando...</div>
    // }

    return (
        <>
            <StyleTitle>
                <span>Pedido finalizado!</span>
            </StyleTitle>
            <StyleImages>
                <SessionContent >
                    <StyleSession>
                        <span><b>Filme e sessão</b></span>
                        <hr></hr>
                        <p>Homem aranha no aranhaverso</p>
                        <p>23/02/2021 às 21:00</p>
                    </StyleSession>
                    <StyleTicket>
                        <span><b>Ingressos</b></span>
                        <hr></hr>
                        <p>Homem aranha no aranhaverso</p>
                        <p>23/02/2021 às 21:00</p>
                    </StyleTicket>
                    <StyleBuyer>
                        <span><b>Comprador(a)</b></span>
                        <hr></hr>
                        <p>Homem aranha no aranhaverso</p>
                        <p>23/02/2021 às 21:00</p>
                    </StyleBuyer>
                    <StyleButton>
                        <button>Voltar para tela inicial</button>
                    </StyleButton>

                </SessionContent>
            </StyleImages>
        </>
    )

}

const StyleButton = styled.div`
margin-top: 30px;
button{
    font-size: 18px;
background-color: #EE897F;
width: 338px;
height: 42px;
border-radius:5px;
}
`

const StyleImages = styled.div`
        display: flex;
        width: 100%;
        height: 550px;
        overflow-y: auto;
        flex-wrap: wrap;
           
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
    
    span{
        size: 24px;
        top: 0px;
        color: #ffffff;
        font-family: 'Sarala',sans-serif;
    }
 `

const SessionContent = styled.div`
    width: 338px;
    height: 421px;
    background-color: #2B2D36;
    display:flex;
    margin-left: 15px;
    margin-top: 15px;
    border-radius: 4px;
    flex-direction: column;
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
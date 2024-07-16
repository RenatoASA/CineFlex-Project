import styled from 'styled-components'
// import { useState } from "react";
import axios from "axios"
import { useEffect, useState } from "react";

export default function Sessions({ urlId }) {

    const [session, setSession] = useState(null);

    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/urlId/showtimes");

        promise.then((response) => setSession(response.data));

        promise.catch((error) => console.log(error.response.data));
    }, []);

    if(movies === null){
        return <div>Carregando...</div>
    }

    return (
        <>
            <StyleTitle>
                <span>Selecione o horário</span>
            </StyleTitle>
            <StyleImages>   
            {session.map(ses => (
                <SessionContent key={ses.id}>
                    console.log(ses);
                    {/* <span>{}</span>
                    <img src={} /> */}
                </SessionContent>            
            ))}
            </StyleImages>
        </>
    )

}

const SessionContent = styled.div`
    
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
const StyleImage = styled.div`
      margin-top: 20px;
      margin-left: 20px;
      
      img{ width: 145px;
       height: 210px;
       border-radius: 5px;
       
      }
 `
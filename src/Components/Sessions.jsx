import styled from 'styled-components'
// import { useState } from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


export default function Sessions() {

    const {filmeId}= useParams();
    const [session, setSession] = useState(null);
    console.log(filmeId);


    useEffect(() => {

        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeId}/showtimes`)

        .then((response) => setSession(response.data))

        .catch((error) => console.log(error.response.data))
    }, []);

    if(session=== null){
        return <div>Carregando...</div>
    }

    return (
        <>
            <StyleTitle>
                <span>Selecione o horário</span>
            </StyleTitle>
            <StyleImages>   
            {session.days.map(day => (
                <SessionContent key={day.id}>
                    
                    <span>{day.weekday} , {day.date}</span>
                    <hr></hr>
                    <StyleSeparator>
                    {day.showtimes.map(showtime => (                    
                    <StyleTime key={showtime.id}>{showtime.name}</StyleTime> 
                    
                ))}
                    </StyleSeparator>
                </SessionContent>            
            ))}
            </StyleImages>
        </>
    )

}

const StyleSeparator = styled.div`
    display: flex;
    justify-content: center;
    width:338px;
    align-items: center;
    

`

const StyleTime = styled.div`
border:solid 2px #EE897F;
width: 84px;
height: 41px;
font-size: 16px;
color:#EE897F;
align-items: center;
display:flex;
justify-content: center;
margin-left: 20px;
margin-top: 15px;
`

const SessionContent = styled.div`
    width: 338px;
    height: 149px;
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
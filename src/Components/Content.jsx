
import styled from 'styled-components'
// import { useState } from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Content() {

    const [movies, setMovies] = useState(null);

    useEffect(() => {

        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        .then((response) => setMovies(response.data))

        .catch((error) => console.log(error.response.data));
    }, []);

    if (movies === null) {
        return <div>Carregando...</div>
    }

    return (
        <>
            <StyleTitle>
                <span>Em Cartaz</span>
            </StyleTitle>
            <StyleImages>
                {movies.map(poster => (
                    <StyleImage to={`/sessoes/${poster.id}`} key={poster.id} >
                        <img src={poster.posterURL} />
                    </StyleImage>
                ))}
            </StyleImages>
        </>
    )

}

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
const StyleImage = styled(Link)`
      margin-top: 20px;
      margin-left: 20px;
      text-decoration: none;
      img{ width: 145px;
       height: 210px;
       border-radius: 5px;
       
      }
 `

// const StyleContent = styled.div`
//     width: 100%;
//     height: 100%;
//     background-color: #FB6B6B;
//     margin-top: 200px;
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     overflow-y: auto;
//     padding-top: 20px;
//     box-sizing: border-box;
// `;

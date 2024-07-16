
import styled from "styled-components"
import TopContent from './TopContent.jsx'
import Content from './Content.jsx'
import Sessions from "./Sessions.jsx"
import { useState } from "react"


export default function Container(){
    const [ urlId, setUrlId] = useState("");
    
    return(
    <StyleContainer>
        <TopContent />
        {/* <Content setUrlId={setUrlId} /> */}
        <Sessions urlId={urlId} />
        
    
       
    </StyleContainer>
    )
}

const StyleContainer = styled.div`
    background-color: #212226;
    width: 375px;
    height: 550px;
    margin-top: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
   

`
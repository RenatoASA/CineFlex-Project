
import styled from "styled-components"
import TopContent from './TopContent.jsx'
import Content from './Content.jsx'
import Sessions from "./Sessions.jsx"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function Container() {
    const [urlId, setUrlId] = useState("");

    return (
        <BrowserRouter>
            <StyleContainer>
                <TopContent />
                <Routes>
                    <Route path="/" element={<Content />}/>
                    <Route path="/sessoes/:filmeId" element={<Sessions />} />
                </Routes>


            </StyleContainer>
        </BrowserRouter>
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
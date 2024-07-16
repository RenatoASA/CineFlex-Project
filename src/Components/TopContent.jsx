 import imgcinema from '../assets/imgcinema.png'
import styled from 'styled-components'

export default function Topo(){
    return(
        <TopoStyle>
          <img src={imgcinema}></img>
          <span>Cineflex</span>
        </TopoStyle>
    )
}

const TopoStyle = styled.div`
     width: 375px;
    height: 67px;
    background-color: #EE897F ;
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    
    img{
    width: 39px;
    margin-right: 20px;
    }
    span{
    font-size: 34px;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color:#FADBC5;

}
`
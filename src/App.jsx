
import Container from './Components/Container'
import styled from 'styled-components'

function App() {
 

  return (
    <StyleMain>   
        <Container /> 
    </StyleMain> 
   
  )
}

export default App



const StyleMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Righteous", sans-serif;

`
import styled from 'styled-components'
// import { useState } from "react";
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


export default function Seats() {

    const { idSessao } = useParams();
    const [seats, setSeats] = useState(null);
    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {

        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

            .then((response) => setSeats(response.data))


            .catch((error) => console.log(error.response.data))


    }, []);

    const CpfChange = (e) => {
        const formattedCpf = formatCPF(e.target.value);
        setCpf(formattedCpf);
    };


    if (seats === null) {
        return <div>Carregando...</div>
    }
    
    const SeatClick = (seat) => {
        if (!seat.isAvailable) {
            alert("Esse assento não está disponível");
            
            return;
        }

        if (selectedSeats.includes(seat.id)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat.id));
        } else {
            setSelectedSeats([...selectedSeats, seat.id]);
        }
    };

    function formatCPF(value) {
        return value
            .replace(/\D/g, '') // Remove tudo que não é dígito
            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os três primeiros dígitos
            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os três próximos dígitos
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona um traço antes dos últimos dois dígitos
    }
    const Submit = (e) => {
        e.preventDefault();

        const reservation = {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        };

        axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', reservation)
        
            .then(() => navigate('/sucesso'))
            .catch((error) => console.log(error.response.data));
    };

    return (
        <>
            <StyleTitle>
                <span>Selecione o(s) assento(s)</span>
            </StyleTitle>
            <StyleImages>
                <form onSubmit={Submit}>
                    <SeatsContent >
                        {seats.seats.map(seat => (
                            <SeatButton
                                key={seat.id}
                                onClick={() => SeatClick(seat)}
                                selected={selectedSeats.includes(seat.id)}
                                isAvailable={seat.isAvailable}
                                >
                                
                                {seat.name}
                            </SeatButton>
                        ))}
                    </SeatsContent>
                    <StyleInput>
                    <hr></hr>
                    <label htmlFor="nome">Nome do comprador(a)</label>
                    <input
                        type="text"
                        id="nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='Digite seu nome'
                    />
                    <label htmlFor="cpf">CPF do comprador(a)</label>
                    <input
                        type="text"
                        id="cpf"
                        value={cpf}
                        onChange={CpfChange}
                        required
                        placeholder='Digite seu CPF'
                    />
                    <button>Rersevar assento</button>
                    </StyleInput>
                </form>
            </StyleImages>
        </>
    )

}

const SeatButton = styled.button`
    border-color: ${props => props.selected ? '#9c1408' : ''};
    background-color: ${props => props.selected ? '#EE897F' : (props.isAvailable ? ' #26f591' : '#212226')};
    color: ${props => props.isAvailable ? 'black' : '#212226'};
       border-radius: 12px;
    width: 28px;
    height: 28px;
  
`;

const StyleInput = styled.div`
display: flex;
flex-direction:column;
button{
    margin-top: 40px;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    margin-left: 30px;
    color: #2B2D36;
    background-color: #EE897F;
   }
hr{
        width: 80%;
        margin-top: 13px;
        margin-left: 50px;
        color:#4E5A65;
    }
label{
    margin-left: 40px;
    margin-top: 23px;
    color: #ffffff;
}
input{
    width: 290px;
    height: 38px;
    border-radius: 10px;
    margin-left: 30px;
}
`

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

const SeatsContent = styled.div`
    width: 300px;
    height: 200px;
    margin-left: 35px;
    background-color:#212226;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* button{
        border-radius: 12px;
        width: 28px;
        height: 28px;
        color: ${props => props.selected ? 'white' : 'initial'};
        background-color: ${props => props.selected ? 'green' : 'initial'};
    } */
    hr{
        width: 50%;
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
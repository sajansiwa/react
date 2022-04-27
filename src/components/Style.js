
import styled from 'styled-components'

export const Head = styled.header`
    align-content: center;
    display: flex;
    background-color: #28282B;
    justify-content: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: whitesmoke;
    padding: 0px 0px;
    width: 100%;
 `   

export const Foot = styled.footer`
    display: flex;
    position: absolute;
    bottom: 0;
    width: 95%;
    padding: 0px 0px;
    
    text-align: center;
    opacity: 70%;
    color: whitesmoke;
    font-family: cursive;
    justify-content: space-evenly;   
`

export const Navi= styled.nav`
    text-decoration: none;
    display: inline-block;
    background-color: black;
    padding: 0px 30px; 
    border:5px;
    flex-basis: 7%;
    &:hover{
        border-radius: 50px;
        background-color: #1F51FF;
    }
    
    

`
export const Flx= styled.div`
    display: flex;
    justify-content: space-between;
`
export const LoginContainer=styled.div`
    display: flex;

`
export const Position= styled.div`
    margin-left: auto;
    margin-right: auto;
`
export const Log= styled.img`
    width: 75px;
    height: 60px;
`

export const linkStyle = {
    textDecoration: "none",
    color: 'white',
   }

export const LoginComponent=styled.form`
    align-items: center;
    align-content: center;
    flex-direction: column;
    height: 60vh;
    width: 30vw;
    background-color: white;
    display: flex;
    border-radius: 5px;
    background: #7393B3;
`

export const MainComponent=styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 97vh;
width: 97vw;
`
export const Topic=styled.h2`
text-align: center;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-style: normal;
color: black;
`
export const Inp=styled.input`
    height:1rem;
    width: 90%;
    border-radius: 50px;
    padding: 1rem;
    border-color: black;
    box-shadow: 0 8px 32px black;
    &:hover{
        border-color: #E30B5C;
    }
`

export const InputComponent=styled.label`
display: flex;
align-content: center;
flex-direction: column;
justify-content: space-around;
height: 30%;
width: 90%;

`
export const ButtonComponent=styled.div`
display: flex;
align-content: center;
flex-direction: row;
justify-content: space-around;
height: 50%;
width: 50%;
`

export const Button=styled.button`
    height:20%;
    width: 80%;

    color: whitesmoke;
    font-family: "Montserrat", sans-serif ;
    padding: 9px 25px;
    border-radius: 50px;
    padding: 1rem;
    border-color: black;
    box-shadow: 0 8px 32px black;
    background-color: #353935;
    &:hover{
        border-color: whitesmoke;
    }
`

export const P=styled.p`
    color: whitesmoke;
`

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
background-color: #FFF8DC;
margin: 0;
}

ul{
list-style: none;
}

li{
width: 320px;
}

button{
border-radius: 25%;
padding: 15px 10px;
type: button;
border: none;
font-size: 20px;
}

img{
border-radius: 15%;
width: 310px;
height: 310px;
}
`
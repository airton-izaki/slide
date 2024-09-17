import React, { useState } from "react";

function Pagina_16()
{
    const [texto, setTexto] = useState("");
    function handleClick (texto, event){
        setTexto (texto);
        console.log ("Clicou");
    };
    return (
        <div>
            <hr />
            <h1>Página 16</h1>
            <button onClick={ (event)  =>  handleClick("José", event)  }>Clicar</button>
            <p>Texto: {texto}</p>  
        </div>
    )
}
export default Pagina_16
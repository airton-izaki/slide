import React, { useState } from "react";

function Pagina_14()
{
    const [nome, setNome] = useState("");
    function handleClick (event){
        setNome ("José");
        console.log ("Clicou");
    };
    return (
        <div>
            <hr />
            <h1>Página 14</h1>
            <button onClick={handleClick}>Clicar</button>
            <p>nome: {nome}</p>
        </div>
    )
}
export default Pagina_14
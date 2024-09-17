import React, {useState} from "react";

export default function Pagina_22()
{
    function handleKeyDown(event)
    {
        console.log(`Você acionou a tecla ${event.key}`)
    }
    return(
        <div>
            <hr />
            <h1>Página 22</h1>
            <input onKeyDown={handleKeyDown} />
        </div>
    )
}
import React, {useState} from "react";

export default function Pagina_18()
{
    function handleClick (event)
    {
        console.log(`Você pressionou um ${event.target.tagNam} !`);
    };
    
    return (
        <div>
            <hr />
            <h1>Pagina 18</h1>
            <div onClick={handleClick}>
                <p>Clique-me</p>
            </div>
            <button onClick={handleClick}>Clicar</button>
        </div>
    )
}
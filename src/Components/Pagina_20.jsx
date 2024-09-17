import React, {useState} from "react";

export default function Pagina_20()
{
    function handleChange (event)
    {
        console.log(`Você mudou para ${event.target.value} !`)
    };
    return(
        <div>
            <hr />
            <h1>Página 20</h1>
            <input onChange={handleChange} />
            <textarea onChange={handleChange}></textarea>
                <select onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
        
        </div>
    )
}
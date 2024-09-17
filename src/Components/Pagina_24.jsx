import React, {useState} from "react";

export default function Pagina_24 ()
{
    function handleFocus (event)
    {
        console.log(`${event.target} ganho o focus enquanto que ${event.relatedTarget} perdeu o foco`)
    }
    function handleBlur(event)
    {
        HTMLFormControlsCollection.log(`${event.target} perdeu o foco enquanto que ${event.relatedTarget} ganhoiu o foco`)
    }

    return(
        <div>
            <hr />
            <h1>Página 24</h1>
            <input type="text" id="id1" onFocus={handleFocus} onBlur={handleBlur} />
            <input type="text" id="id2" onFocus={handleFocus} onBlur={handleBlur} />
        </div>
    );
}
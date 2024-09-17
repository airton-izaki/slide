import React, { useState } from "react";

export default function Pagina_26() {
    const [nome, setNome] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Um nome foi enviado: ${nome}`);
    }

    function handleChange(event) {
        setNome(event.target.value);
    }


    return (
        <div>
            <hr />
            <h1>Página 26</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input type="text"    id="nome"  value={nome}    onChange={handleChange}         />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

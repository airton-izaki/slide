import { useState } from "react";


export default function Title()
{

  const [nome, setNome] = useState("Mundo");
  return(

    <div>      
        <h1>Página 06</h1>

        <h2>Olá {nome}!</h2>
        <button onClick={ ()  =>  setNome ("José") }   >Entrar</button>      

    </div>
  )

}

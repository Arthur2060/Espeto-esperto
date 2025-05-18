import React from "react"

function Prato ({imagen, nome, descricao, ingredientes}) {

    return (
        <li class="prato">
            <img src={imagen} class="foto" alt="Imagen meramente ilustrativa do prato"/>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <details>
                <summary>Ingredientes</summary>
                {(ingredientes || []).map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                ))}
            </details>
        </li>
    )
}

export default Prato
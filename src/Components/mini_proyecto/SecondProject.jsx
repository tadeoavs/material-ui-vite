import React from "react";

export default function SecondProject(props) {
    return (



        <div>
            <h2>Store</h2>

            <div>
                <h3>¿Qué deseas ver de la tienda hoy?</h3>
                <h4>Bicicletas o Libros</h4>
            </div>

            <div>
                <input type="text" placeholder="Escribe lo que quieras ver" value={props.decision} onChange={e => props.setDecision(e.target.value)} />
                <button onClick={props.pregunta}>Ver producto</button>
            </div>

            <div>
                <h3>Productos: </h3>

                {props.valor !== "Libros" && props.valor !== "Bicicletas" ? (
                    "El producto que escribiste no está disponible en la tienda"
                ) : (
                    props.valor === "Libros" ? (
                        <ul>
                            {props.libros.map((book, index) => (
                                <li>{book.category} | {book.author} | {book.title} | {book.price} | {book.inStock ? "En stock" : "Agotado"} | {book.sold ? "Vendido" : "Disponible"}</li>
                            ))}
                        </ul>
                    ) : (
                        <ul>
                            {props.bicicletas.map((bicycle, index) => (
                                <li>{bicycle.color} | {bicycle.price} | {bicycle.inStock ? "En stock" : "Agotado"} | {bicycle.sold ? "Vendido" : "Disponible"}</li>
                            ))}
                        </ul>
                    )
                )}
            </div>
        </div>
    )
}
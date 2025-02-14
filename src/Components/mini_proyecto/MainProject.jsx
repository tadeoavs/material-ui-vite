import React from "react";

import { useState } from 'react'

import SecondProject from "./SecondProject";

export default function MainProject() {

    const [decision, setDecision] = useState("")

    const [valor, setValor] = useState("")

    const pregunta = () => {
        setValor(decision)
    }



    const data = {
        "store": {
            "book": [
                {
                    "category": "reference",
                    "author": "Nigel Rees",
                    "title": "Sayings of the Century",
                    "price": 8.95,
                    "inStock": true,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Evelyn Waugh",
                    "title": "Sword of Honour",
                    "price": 12.99,
                    "inStock": false,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Herman Melville",
                    "title": "Moby Dick",
                    "isbn": "0-553-21311-3",
                    "price": 8.99,
                    "inStock": true,
                    "sold": false
                },
                {
                    "category": "fiction",
                    "author": "J. R. R. Tolkien",
                    "title": "The Lord of the Rings",
                    "isbn": "0-395-19395-8",
                    "price": 22.99,
                    "inStock": false,
                    "sold": false
                }
            ],
            "bicycle": [
                {
                    "color": "red",
                    "price": 19.95,
                    "inStock": true,
                    "sold": false
                }
            ]
        }
    }


    return (

        <div>

            {(data.store).length === 0 ? (
                "No hay data"
            ) : (
                <SecondProject
                    libros={data.store.book}
                    bicicletas={data.store.bicycle}
                    pregunta={pregunta}
                    decision={decision}
                    setDecision={setDecision}
                    valor={valor}
                    setValor={setValor}

                />
            )}

        </div>
    )
}
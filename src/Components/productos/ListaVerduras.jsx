import { Button, Divider } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListaProductoDialogo from './ListaProductoDialogo';


export default function ListaVerduras() {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
            "bicycle": 
                {
                    "color": "red",
                    "price": 19.95,
                    "inStock": true,
                    "sold": false
                }
            
        }
    }

    const verduras = [
        { id: 1, nombre: "Lechuga", descripcion: "Verdura romanita", precio: 10, cantidad: 12 },
        { id: 2, nombre: "Tomate", descripcion: "Tomate rojo", precio: 15, cantidad: 10 },
        { id: 3, nombre: "Pepino", descripcion: "Pepino verde", precio: 8, cantidad: 5 },
        { id: 4, nombre: "Cebolla", descripcion: "Cebolla blanca", precio: 5, cantidad: 20 },
        { id: 5, nombre: "Zanahoria", descripcion: "Zanahoria naranja", precio: 7, cantidad: 8 },
    ]

    console.log("Objeto verduras: ", verduras)
    console.log("Total de datos en el arreglo: ", verduras.length)

    return (
        <div>
            <h2>Hola desde ListaVerduras</h2>

            {verduras.length === 0 ? (
                "No hay verduras"
            ) : (
                <>

                    {verduras.map((verdura, index) => (
                        <div key={index}>
                            <ul>
                                <li>{verdura.id} | {verdura.nombre} | {verdura.descripcion} | ${verdura.precio} <Button onClick={() => alert(verdura.cantidad)} variant='contained' color='secondary'>Ver más</Button></li>
                            </ul>
                        </div>
                    ))}

                    <table border="1">

                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Boton</th>
                        </tr>


                        {verduras.map((verdura, index) => (
                            <tr>
                                <td>{verdura.id}</td>
                                <td>{verdura.nombre}</td>
                                <td>{verdura.descripcion}</td>
                                <td>${verdura.precio}</td>
                                <td>{verdura.cantidad}</td>
                                <td><Button onClick={() => alert(verdura.cantidad)} variant='contained' color='secondary'>Ver más</Button></td>
                            </tr>
                        ))}

                    </table>

                    <Divider sx={{ marginTop: 10 }} />

                    <div>
                        <FormControl fullWidth variant='standard'>
                            <InputLabel id="demo-simple-select-label">Selecciona tu verdura</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                {verduras.map((verdura) => (
                                    <MenuItem value={verdura.id}>{verdura.nombre} | ${verdura.precio}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </>
            )}

            <Divider/>
            <ListaProductoDialogo
            data={data.store}
            />
        </div>
    )
}


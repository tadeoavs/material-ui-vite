import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SecondProject(props) {
    return (



        <div>
            <h2>Tadeo Aviles' Store</h2>

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

                {props.valor === "libros" ? (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell align="right">Author</TableCell>
                                    <TableCell align="right">Title</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">In Stock</TableCell>
                                    <TableCell align="right">Sold</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.libros.map((libro, index) => (
                                    <TableRow
                                        key={libro.category}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {libro.category}
                                        </TableCell>
                                        <TableCell align="right">{libro.author}</TableCell>
                                        <TableCell align="right">{libro.title}</TableCell>
                                        <TableCell align="right">{libro.price}</TableCell>
                                        <TableCell align="right">{libro.inStock ? "En stock" : "Agotado"}</TableCell>
                                        <TableCell align="right">{libro.sold ? "Vendido" : "Disponible"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : ""}

                {props.valor === "bicicletas" ? (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Color</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">In Stock</TableCell>
                                    <TableCell align="right">Sold</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.bicicletas.map((bici, index) => (
                                    <TableRow
                                        key={bici.color}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {bici.color}
                                        </TableCell>
                                        <TableCell align="right">{bici.price}</TableCell>
                                        <TableCell align="right">{bici.inStock ? "En stock" : "Agotado"}</TableCell>
                                        <TableCell align="right">{bici.sold ? "Vendido" : "Disponible"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : ""}

                {props.valor !== "libros" && props.valor !== "bicicletas" ? (
                    "El producto no está disponible"
                ) : ""}

            </div>

            {/* 
            <ul>
                {props.libros.map((book, index) => (
                    <li>{book.category} | {book.author} | {book.title} | {book.price} | {book.inStock ? "En stock" : "Agotado"} | {book.sold ? "Vendido" : "Disponible"}</li>
                ))}
            </ul>
            */}

            {/* 
            <ul>
                {props.bicicletas.map((bicycle, index) => (
                    <li>{bicycle.color} | {bicycle.price} | {bicycle.inStock ? "En stock" : "Agotado"} | {bicycle.sold ? "Vendido" : "Disponible"}</li>
                ))}
            </ul>
            */}

        </div>


    )
}
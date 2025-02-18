import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import React from "react";
import { Typography } from "@mui/material";
import MiDialogo from "./MiDialogo";

export default function ListaProductoDialogo(props) {

    const data = props.data
    console.log(data)


    return (
        <div>
            <h1>Consumo de Json</h1>

            {/* <Grid container>
                <Grid size={6}>
                    Hola
                </Grid>
                <Grid size={6}>
                    Hola
                </Grid>
            </Grid> */}
            <Grid container spacing={2}>
                <Grid size={{ sm: 12, md: 6 }}>
                    <Card variant="outlined" color="success" style={{ padding: 15 }}>
                        <Typography variant="h5" color="initial">Bicicleta en promo</Typography>
                        <Typography variant="h5" color="initial">Precio mas bajo: {data.bicycle.price}</Typography>
                        <Typography variant="h5" color="initial">Stock: {data.bicycle.inStock ? "Disponible" : "No hay"} </Typography>
                        <Typography variant="h5" color="initial">Color: {data.bicycle.color} </Typography>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                {data.book.map((libro, index) => (
                    <Grid size={{ sm: 12, md: 6 }} key={index}>
                        <Card variant="outlined" color="success" style={{ padding: 15 }}>
                            <Typography variant="h5" color="initial">Libro</Typography>
                            <Typography variant="h5" color="initial">Titulo: {libro.title}</Typography>
                            <Typography variant="h5" color="initial">Autor: {libro.author} </Typography>
                            <Typography variant="h5" color="initial">Categoria: {libro.category} </Typography>
                            <MiDialogo
                            datos={libro}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>


        </div>
    )
}
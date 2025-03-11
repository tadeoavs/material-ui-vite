import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

export default function ContenidoComida(props) {

    console.log("Props: ", props.datos)

    return (
        <div>
            {
                !props.datos || props.datos.length === 0 ? (
                    <Typography variant="h4" align="center" color="initial">No se encontraron resultados</Typography>
                ) : (
                    <Grid container spacing={3}>
                        {props.datos.map((comida, index) => (
                            <Grid key={index} size={{ xs: 6, md: 4 }}>
                                <Paper sx={{ padding: 4, textAlign: 'center', '& a': { color: 'blackv2.main', textDecoration: 'none' } }}>
                                    <Typography variant="h6" color="initial">Comida: {comida.strMeal}</Typography> <br />
                                    <img src={comida.strMealThumb} width={300} alt={comida.strMeal} style={{ width: '100%' }} /> <br />
                                    <Typography color="initial" variant="h6">ID: {comida.idMeal}</Typography>
                                    <Button
                                        variant="outlined"
                                        color="blackv2.main"
                                        href={comida.strYoutube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textDecoration: 'none', color: 'white', my: 2 }}
                                    >
                                        Ver video
                                    </Button> <br />
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography component="span">Ingredientes</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ul>
                                                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => {
                                                    const ingredient = comida[`strIngredient${num}`];
                                                    return ingredient ? <li key={num}>{ingredient}</li> : null;
                                                })}
                                            </ul>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography component="span">Instrucciones</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {comida.strInstructions}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component={Link}
                                        to={`/recetas/${comida.idMeal}`}
                                        sx={{ mt: 2 }}
                                    >
                                        Más detalles
                                    </Button>
                                </Paper>
                            </Grid>
                        ))}


                    </Grid>
                )
            }



        </div >
    )
}
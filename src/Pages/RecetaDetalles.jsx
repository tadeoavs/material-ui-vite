import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Paper, Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

export default function RecetaDetalles() {
    const { id } = useParams();
    const [datos, setDatos] = React.useState(null);

    React.useEffect(() => {
        const obtenerComidaPorID = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const result = await response.json();
                setDatos(result.meals[0]);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerComidaPorID();
    }, [id]);

    if (!datos) {
        return <Typography variant="h4" align="center">Cargando...</Typography>;
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper sx={{ padding: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    {datos.strMeal}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <img src={datos.strMealThumb} alt={datos.strMeal} style={{ width: '100%', maxWidth: 500, borderRadius: 8 }} />
                </Box>
                <Typography variant="h6">ID: {datos.idMeal}</Typography>
                <Typography variant="body1" paragraph>
                    {datos.strInstructions}
                </Typography>
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
                                const ingredient = datos[`strIngredient${num}`];
                                return ingredient ? <li key={num}>{ingredient}</li> : null;
                            })}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </Paper>
        </Container>
    );
}
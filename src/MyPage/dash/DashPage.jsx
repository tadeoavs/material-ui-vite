import { Button, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './css/dashpage.css';
import DashDetails from "./DashDetails";

export default function DashPage() {

    const [idBuscar, setIdBuscar] = React.useState('');

    const [datos, setDatos] = React.useState({
        meals: []
    });

    const navigate = useNavigate();

    const obtenerComidaPorID = async () => {
        const buscar = idBuscar.trim();
        if (buscar == "") {
            alert("No se ha ingresado ningun texto");
        } else {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${buscar}`, requestOptions);
                const result = await response.json();
                setDatos(result);
                console.log(result);
                navigate(`/dash/${buscar}`, { state: { datos: result } });
            } catch (error) {
                console.error(error);
            };
        }
    }

    React.useEffect(() => {
        const obtenerdatos = async () => {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772");
                const result = await response.json();
                setDatos(result);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerdatos();
    }, []);


    return (
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            DashPage
            <br />
            <Link to='/dash/23' >Click para mas detalles de Mexico</Link> <br />
            <Link to='/dash/43' >Click para mas detalles de USA</Link> <br />
            <Link to='/dash/32' >Click para mas detalles de Honduras</Link> <br />

            <Button LinkComponent={Link} to='/dash/45' variant="outlined" color="blackv2.main">Ver mas detalles</Button>
            <br />
            <Grid container direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid size={{ xs: 12, md: 8 }} marginTop={6} marginBottom={6} sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="blackv2.main">Busca tu comida!</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }} marginBottom={4}>
                    <TextField value={idBuscar} onChange={e => setIdBuscar(e.target.value)}
                        variant="outlined"
                        label="Ingresa el ID"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'blackv2.main',
                                },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'blackv2.main',
                            },
                        }}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Button variant="contained" size="large" color='blackv2' sx={{ color: 'white.main' }} onClick={() => { obtenerComidaPorID() }}>Buscar</Button>
                </Grid>
            </Grid>

            


        </div>

    )
}
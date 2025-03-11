import React, { use } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, TextField, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContenidoComida from './ContenidoComida';


export default function HomePage() {

    const [textoBuscar, setTextoBuscar] = React.useState('');

    const [datos, setDatos] = React.useState({
        meals: []
    });

    const obtenerComidaPorNombre = async () => {
        const buscar = textoBuscar.trim();
        if (textoBuscar == "") {
            alert("No se ha ingresado ningun texto");
        } else {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buscar}`, requestOptions);
                const result = await response.json();
                setDatos(result);
                console.log(result)
            } catch (error) {
                console.error(error);
            };
        }
    }

    React.useEffect(() => {
        const obtenerdatos = async () => {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=beef");
                const result = await response.json();
                setDatos(result);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerdatos();
    }, []);

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    });

    console.log("Contenido input: ", textoBuscar)

    return (
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <br />
            <div style={{ textAlign: 'center', color: '#333' }}>
                <h1>Recetas</h1>
            </div>
            <Grid container spacing={0} padding={4}>
                <Grid size={{ xs: 8, md: 8 }} marginLeft={22}>
                    <TextField value={textoBuscar} onChange={e => setTextoBuscar(e.target.value)} fullWidth label='Buscar comida por nombre' sx={{
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
                    }} />
                </Grid>
                <Grid size={{ xs: 4, md: 1 }} container alignItems="flex-center">
                    <Button variant='outlined' color='blackv2.main' onClick={() => { setLoading(true); obtenerComidaPorNombre(); }} endIcon={loading ? <CircularProgress size={20} sx={{ color: "blackv2.main" }} /> : <SearchIcon />}>Search</Button>
                </Grid>
            </Grid>

            <ContenidoComida
                datos={datos.meals}
            />

        </div>
    )
}
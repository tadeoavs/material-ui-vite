import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ContenidoComida from "../../Pages/ContenidoComida";
import Grid from "@mui/material/Grid2";

export default function DashDetails() {
    let { id } = useParams();
    const location = useLocation();
    const datos = location.state?.datos || { meals: [] };

    // React.useEffect(() => {
    //     const bienvenida = () => {
    //         alert('Bienvenido a la pagina de detalles');
    //     };
    //     bienvenida();
    // }, []);

    return (
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <h1>DashDetails </h1><br />
            <h2>ID obtenida desde URL: {id}</h2>
            <div>
                <Grid container
                    alignItems="flex-center"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <ContenidoComida datos={datos.meals} />
                </Grid>
            </div>
        </div>
    );
}
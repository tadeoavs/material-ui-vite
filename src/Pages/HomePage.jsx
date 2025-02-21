import React from 'react';
import Grid from '@mui/material/Grid2';
import { Button, TextField, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function HomePage() {

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    });

    return (
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <br />
            <div style={{ textAlign: 'center', color: '#556cd6' }}>
                <h1>Home Page</h1>
            </div>
            <Grid container spacing={0} padding={4}>
                <Grid size={{ xs: 8, md: 8 }} marginLeft={22}>
                    <TextField type='sumbit' fullWidth label='Buscar comida por nombre'/>
                </Grid>
                <Grid size={{ xs: 4, md: 1 }} container alignItems="flex-center">
                    <Button variant='outlined' color='primary' onClick={() => setLoading(true)}  endIcon={loading ? <CircularProgress size={15} /> : <SearchIcon />}>Search</Button>
                </Grid>
            </Grid>


            {/* <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 4 }}>
                    <Paper style={{ padding: 10 }}>
                        Home Page
                    </Paper>
                </Grid>

            </Grid> */}

        </div>
    )
}
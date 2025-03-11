import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router';
import './style/style.css';


export default function Home() {
    return (
        <div className="body">
            <div className="title-container">
                <div className="title">
                    <Typography variant="h3" >
                        WikiFood
                    </Typography>
                </div>
                <div className="subtitle">
                    <Typography variant="h5" >
                        Encuentra las mejores recetas y lugares para comer
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    color="blackv2"
                    component={Link}
                    to="/recetas"
                    className="search-button"
                >
                    <Typography color="white">
                        Buscar Comida
                    </Typography>
                </Button>
                <Button
                    variant="contained"
                    color="blackv2"
                    component={Link}
                    to="/dash"
                    className="search-button" sx={{ margin: '20px' }}
                >
                    <Typography color="white">
                        Buscar Comida por id
                    </Typography>
                </Button>
                <img src="/src/MyPage/home/images/WikiFood.png" style={{ width: '50%', maxWidth: '300px', margin: '20px 0' }} alt="WikiFood" /> <br />
            </div>
        </div>
    );
}
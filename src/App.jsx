import * as React from 'react';
import Button from '@mui/material/Button'
import { Divider, TextField } from '@mui/material';
import { AlumnoPromedio } from './Components/AlumnoPromedio';
import ComponenteEncabezado from './Components/ComponenteEncabezado';
import ListaProductos from './Components/alumnos_promedio/ListaProductos';
import ListaVerduras from './Components/productos/ListaVerduras';
import MainProject from './Components/mini_proyecto/MainProject';
import SecondProject from './Components/mini_proyecto/SecondProject';


export default function App() {

  return (
    <>
    <ComponenteEncabezado/>

    <h1>Hola mundo</h1>

    <AlumnoPromedio/>

    <ListaProductos/>

    <ListaVerduras/>

    <Divider sx={{ marginTop: 10 }}/>

    <MainProject/>

    </>

    
  );
}

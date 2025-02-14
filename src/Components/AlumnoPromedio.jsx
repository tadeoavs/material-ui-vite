import React from 'react'
import { ContenedorAprobado } from './alumnos_promedio/ContenedorAprobado';
import { ContenedorReprobado } from './alumnos_promedio/ContenedorReprobado';

export const AlumnoPromedio = () => {

    const materia1 = 7;
    const materia2 = 8;
    const materia3 = 9;

    const resultado = (materia1 + materia2 + materia3) / 3;

    if (resultado >= 8) {
        return (
                <>
                    <ContenedorAprobado/>
                    <h3>Tu calificacion es: {resultado} </h3>
                </>
        )
    } else {
        return (
                <ContenedorReprobado/>
        )
    }
}

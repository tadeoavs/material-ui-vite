import { Link } from 'react-router'

export default function NotFound() {
    return (
        <div>
            <h2>404 - Página no encontrada</h2>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <Link to="/">Volver a la página de inicio</Link>
        </div>
    )
}
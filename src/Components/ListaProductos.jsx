import React, { useState } from 'react'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'


const ListaProductos = () => {

    const [home, setHome] = useState(false)

    const changeState = () => {
        setHome(!home)
        console.log("Tu switch esta en: ", home)
    }


    return (
        <div>
            <Switch
                value= { home }
                checked={ home }
                onChange={ changeState }
                inputProps={{ "aria-label": '' }}
            />

            <Typography variant="h3" color={home ? "success":"error"}>Luz cuarto</Typography>

            <Divider color="black" />
            
            
            

        </div>
    )
}

export default ListaProductos
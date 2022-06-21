import React from 'react'

import { Box, Grid } from "@mui/material";

const Cajita = () => {
  return (
    <div>
        <Grid container> 
            {/* la idea con el grid es que cuando este en pantalla grande se dividan las cajitas y cuando está en pantalla pequeña se muestre una caja completa */}
            <Grid item xs={12} sm={6} md={4}> {/*el número indica los espacios disponibles*/}
                <Box border={2}>
                    xs12
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}> {/*el número indica los espacios disponibles*/}
                <Box border={2}>
                    xs12
                </Box>
            </Grid>

        </Grid>
    </div>


    /*<div>
        <Box 
            color='primary.main'
        >
            Cajita
        </Box>
        <Box 
            color='primary.contrastText' //color del texto
            bgcolor='primary.main' //color del fondo
        >
            Cajita
        </Box>
        <Box 
            color='primary.contrastText'
            bgcolor='primary.main'
            m={2} //m=margin tanto para arriba, abajo, izquierda, derecha; el numero que le pasemos se va a multiplicar por 8 pixeles en este caso serian 16px
        >
            Cajita
        </Box>
        <Box 
            color='primary.contrastText'
            bgcolor='primary.main'
            mr={2} //margen a la derecha, mx= margen a la izquierda y a la derecha, my = margen hacia arriba y hacia abajo, mt= margen superior
            p={5} //padding (margen interior), funciona igual que los margenes (px, py, etc)
        >
            Cajita
        </Box>
        <Box 
            m={2}
            p={5}
            border={2} //el número es el ancho del borde
            borderColor="error.main" //si queremos agregar color al borde tenemos que declarar el atributo anterior del borde
        >
            Cajita
        </Box>
    </div>*/
  )
}

export default Cajita
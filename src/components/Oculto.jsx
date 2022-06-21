import React from 'react'
import { Typography, Hidden, Button} from '@mui/material' //puntos de quiebre para hacer el sitio web responsive

const Oculto = (props) => {
    return (  
        <div>
            <Typography variant='h6' color='initial'>
                Ancho: {props.width}
            </Typography>

            <Hidden xs> {/*oculta cuando estemos en dispositivos xs*/}
                <Button variant='contained' color='primary'>
                    xs
                </Button>
            </Hidden>

            <Hidden smDown> {/*oculta cuando el tamaño sea inferior a sm*/}
                <Button variant='contained' color='primary'>
                    sm
                </Button>
            </Hidden>

            <Hidden mdUp> {/*oculta cuando sea md o superior*/}
                <Button variant='contained' color='primary'>
                    md
                </Button>
            </Hidden>

            <Hidden only={['lg', 'md']}> {/*oculta solamente en si está en lg y en md*/}
                <Button variant='contained' color='primary'>
                    lg
                </Button>
            </Hidden>
        </div>
    )
}
 
export default (Oculto);
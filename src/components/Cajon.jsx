import React from 'react'
import { makeStyles } from '@mui/styles'
import { Divider, Drawer } from '@mui/material'
import Listas from './Listas'

const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
}))

const Cajon = (props) => {

    const classes = estilos();

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={props.variant}
            open={props.open} //si está en falso el drawer desaparece y si está en verdadero aparece
            onClose={props.onClose ? props.onClose : null} //si el props.onClose existe entonces mandamos lo que venga de este props y en caso contrario queda en null
        >
            <div className={classes.toolbar}></div>
            <Divider/>
            <Listas/>
        </Drawer>
    )
}

export default Cajon
import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title:{
        flexGrow: 1 //le decimos que ese titulo va a ocupar todo el espacio disponible, por lo tanto se correr el botón del navbar al lado derecho
    }, //NO FUNCIONA
    appBar: { //para que salga el titulo en el navbar cuando se pone el drawer o cajón
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
    },
}))

const Navbar = (props) => {
    const classes = useStyles()
    return(  
        <AppBar className={classes.appBar}>
            <Toolbar> {/*toma el navbar de forma automática y genera un div con espaciado*/}
                <IconButton 
                    color='inherit' 
                    aria-label='menu' 
                    className={classes.menuButton}
                    onClick={() => props.accionAbrir()} //para que abra el drawer al presionar este icono y enviamos esta acción por medio de props al contenedor cuando llamamos al Navbar
                >                    
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    bluuweb
                </Typography>
                <Button variant='text' color='inherit'>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;
import React from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "./Navbar";
import Cajon from "./Cajon";
import { Hidden } from "@mui/material";
import Cajita from "./Cajita";

const estilos = makeStyles((theme) => ({
  //utilizamos el tema y devolvemos los estilos en css
  root: {
    //display para que se comporte de forma flexible
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Contenedor = () => {

  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false) //creamos el estado abrir que esta en falso por defecto

  const accionAbrir = () => { //creamos otra función en la cuál el estado sea contrario al estado anterior, es decir si abrir es falso entonces este es verdadero
      setAbrir(!abrir) //si abrir esta en falso, seyAbrir pasa a verdadero
  }

  return (
    <div className={classes.root}>
      <Navbar accionAbrir={accionAbrir} />
      {/*Por medio de los hidden vamos a abrir y cerrar el drawer según el tamaño de la pantalla*/}
      <Hidden smDown> {/*con xs no funciona*/}
        <Cajon 
            variant="permanent"
            open={true}
        />
      </Hidden>
      <Hidden mdUp> 
        <Cajon 
            variant="temporary"
            open={abrir}
            onClose={accionAbrir}  //el onClose va a pasar a través de props al cajón, lo va a leer porque viene algo y va a ejecutar la acción setAbrir que va a ser lo contrario de abrir
        />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div> {/*espaciado*/}
        <Cajita/>
      </div>
    </div>
  );
};

export default Contenedor;

import React from 'react'
//import Button from '@mui/material/Button'
//import DeleteIcon from '@mui/icons-material/Delete';
//import {Icon, IconButton, Typography} from '@mui/material';
//import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/styles';
import theme from './temaConfig';
//import Navbar from './components/Navbar';
//import Listas from './components/Listas';
import Contenedor from './components/Contenedor';
//import Oculto from './components/Oculto';

/*const useStyle = makeStyles({
  botonPersonalizado: {
    background: 'linear-gradient(45deg, #DE6BBB 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    heigth: 48,
    padding: '0 30px',
  }
})*/

function App() {

  //const classes = useStyle()

  return (
    /*<div>
      <Button color="secondary">
        color
      </Button> 
      <Button
        color="secondary"
        variant='text'
      >
        color
      </Button> 
      <Button
        color="secondary"
        variant='contained'
      >
        color
      </Button>
      <Button
        color="secondary"
        variant='outlined'
      >
        outlined
      </Button> 
      <Button
        color="secondary"
        variant='contained'
        disableElevation
      >
        outlined
      </Button> 
      <Button
        color="secondary"
        variant='contained'
        href='https://google.com'
      >
        Google
      </Button>
      <Button
        color="secondary"
        variant='contained'
        fullWidth
        >
        fullWidth
      </Button>
      <Button
        color="secondary"
        variant='contained'
        size='small'
      >
        fullWidth
      </Button> 
      <Button
        color="secondary"
        variant='contained'
        size='medium'
      >
        fullWidth
      </Button> 
      <Button
        color="secondary"
        variant='contained'
        size='large'
      >
        fullWidth
      </Button> 
    </div>*/ 
  
   /* <div>
      <DeleteIcon
        color='primary'
      />
      <Icon>
        room
      </Icon>

      <Button 
        variant="contained" 
        color="secondary"
        //startIcon={<DeleteIcon/>}
        endIcon={<DeleteIcon/>}
      >
        Delete        
      </Button>
      <Button 
        variant="contained" 
        color="secondary"
        startIcon={<Icon>
          room
        </Icon>}
      >
        Maps        
      </Button>

      <IconButton 
      aria-label=""
      >
        <DeleteIcon
          color='primary'
        />
      </IconButton>
    </div> */

    /*<div>
      <Typography variant="h1" color="primary">
        saslsk
      </Typography>
      <Typography variant="body1" color="secondary" align='center' gutterBottom>
        lorem
      </Typography>
      <Typography variant="body1" color="primary" align='center'>
        lorem
      </Typography>
    </div>*/
  
    /*<div>
      <Button className={classes.botonPersonalizado}>
        Mi botón personalizado
      </Button>
    </div>*/

    <ThemeProvider theme={theme}>

      <Contenedor/>

    </ThemeProvider>

  )
}

export default App;

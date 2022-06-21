import React from 'react'
import {
    List, 
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material'
import { CloudQueue } from '@mui/icons-material';
import {Apple} from '@mui/icons-material';

const Listas = () => {
    return (  
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueue/>
                    </ListItemIcon>
                    <ListItemText primary='mi primer elemento'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Apple/>
                    </ListItemIcon>
                    <ListItemText primary='mi segundo element'/>
                </ListItem>

                <Divider/> {/*linea divisoria*/}
            </List>
        </div>
    );
}
 
export default Listas;
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { lightGreen } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: lightGreen[900]
        },
        secondary:{
            main: purple[500]
        }
    }
})

export default theme;
import {createMuiTheme} from "@material-ui/core/styles";
import { primaryColor,neutralColor } from "./colors";
const theme = createMuiTheme({
    pallete:{
        primary: {
            main:primaryColor,
            contrastText:"white"
        }, 
        text:{
            primary: neutralColor
        }
    }
});

export default theme;
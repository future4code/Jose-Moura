import { createMuiTheme } from '@material-ui/core/styles'
import {primaryColor, neutralColor} from "./colors"

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: white,
    },
    border:{
      playlist: '#8B008B'
    },
    text: {
        primary: neutralColor
    }
  }
)

export default theme 
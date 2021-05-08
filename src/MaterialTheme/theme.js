import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F6F6F6"
    },
    secondary: {
      main: "#F79E02"
    }

  },
  typography: {
    h1: {
      fontSize: "2.2rem",
      fontWeight: 700
    },
    h2: {
      fontSize: "2.4rem",
      fontWeight: 500
    },
    h3: {
      fontSize: "2.6rem"
    },
    h4: {
      fontSize: "1.8rem"
    },
    h5: {
      fontWeight: 500
    }

  }
})

export default theme
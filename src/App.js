//Componenetes
import Header from "./components/Nav/Header"
import Intro from './components/Intro/Intro'

//css
import './App.css';

//Matrial UI
import { ThemeProvider } from "@material-ui/styles";
import theme from "./MaterialTheme/theme"

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Header />
      <Intro />


    </ThemeProvider>

  );
}

export default App;

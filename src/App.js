//Componenetes
import Header from "./components/Nav/Header"
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'

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
      <About />
      <Portfolio />


    </ThemeProvider>

  );
}

export default App;

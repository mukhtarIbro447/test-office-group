import './App.css';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import MiddleContent from './components/MiddleContent';
import WhiteColorFactory from './components/WhiteColorFactory';

function App() {
  const theme = createTheme();
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header />
          <MiddleContent />
          <WhiteColorFactory />
        </div>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

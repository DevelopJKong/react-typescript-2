import { ThemeProvider } from "styled-components";
import Router from "./routes/Router";
import { darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

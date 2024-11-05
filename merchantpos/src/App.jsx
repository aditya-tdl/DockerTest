import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./theme/index.jsx";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import HeaderBar from "./scenes/global/HeaderBar";
import { Routes, Route } from "react-router-dom";
function App() {
  const [theme, colorMode]=useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
    <div className="app">
      <main className="content">
      <Routes>
       <Route path="/" element={<HeaderBar/>}/>
      </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

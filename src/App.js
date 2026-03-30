import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Skills } from "./pages/Skills";
import { ContactUS } from "./pages/ContactUS";

// Google Fonts loaded globally
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00ffb4" },
    background: { default: "#060c14", paper: "#0d1a24" },
    text: { primary: "#ffffff", secondary: "rgba(255,255,255,0.55)" },
  },
  typography: {
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": { boxSizing: "border-box", margin: 0, padding: 0 },
        html: { scrollBehavior: "smooth" },
        body: { background: "#060c14", overflowX: "hidden" },
        a: { textDecoration: "none" },
        "::-webkit-scrollbar": { width: 6 },
        "::-webkit-scrollbar-track": { background: "#060c14" },
        "::-webkit-scrollbar-thumb": { background: "rgba(0,255,180,0.3)", borderRadius: 3 },
      },
    },
    MuiButton: { defaultProps: { disableRipple: false, disableElevation: true } },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills"    element={<Skills />} />
          <Route path="/contact" element={<ContactUS/>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
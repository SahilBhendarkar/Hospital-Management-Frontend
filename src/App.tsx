import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";


function App() {
  const theme = createTheme({
    primaryColor: "blueRibbon",

    colors: {
      blueRibbon: [
        "#eff4ff",
        "#dbe6fe",
        "#bfd3fe",
        "#93b4fd",
        "#6090fa",
        "#3b76f6",
        "#2563eb",
        "#1d58d8",
        "#1e4baf",
        "#1e408a",
      ],

      mountainMeadow: [
        "#ecfdf7",
        "#d1faec",
        "#a7f3da",
        "#6ee7bf",
        "#34d39e",
        "#10b981",
        "#059666",
        "#047852",
        "#065f42",
        "#064e36",
      ],
    },

    fontFamily: "Inter, system-ui, sans-serif",
    defaultRadius: "md",
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>

          <Route path="*" element={<HomePage />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

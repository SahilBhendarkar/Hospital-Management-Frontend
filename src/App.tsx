import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { useAppSelector } from "./store/store";
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Departments from "./pages/departments/Departments";
import DepartmentDetails from "./pages/departments/DepartmentDetails";
import Doctors from "./pages/doctors/Doctors";
import DoctorDetails from "./pages/doctors/DoctorDetails";
import Gallery from "./pages/gallery/Gallery";
import Dashboard from "./pages/dashboards/Dashboard";
import ContactPage from "./pages/Contact";

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

  const { role } = useAppSelector((state) => state.auth);

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:departmentSlug" element={<DepartmentDetails />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:doctorSlug" element={<DoctorDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

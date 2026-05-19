import { Navigate } from "react-router-dom";

import AdminDashboard
from "./AdminDashboard";

import PatientDashboard
from "./PatientDashboard";

import DoctorDashboard
from "./DoctorDashboard";

const Dashboard = () => {

    // GET USER
    const user = JSON.parse(
        localStorage.getItem("user")
        || "null"
    );

    // NOT LOGGED IN
    if (!user) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    // PATIENT DASHBOARD
    if (user.role === "patient") {

        return <PatientDashboard />;
    }

    // DOCTOR DASHBOARD
    if (user.role === "doctor") {

        return <DoctorDashboard />;
    }

    // ADMIN DASHBOARD
    return <AdminDashboard />;
};

export default Dashboard;
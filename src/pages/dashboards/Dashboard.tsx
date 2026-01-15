import { useAppSelector } from "../../store/store";
import AdminDashboard from "./AdminDashboard";
import PatientDashboard from "./PatientDashboard";
import DoctorDashboard from "./DoctorDashboard";

const Dashboard = () => {
    const { role } = useAppSelector((state) => state.auth);

    if (role === 'patient') {
        return <PatientDashboard />;
    }

    if (role === 'doctor') {
        return <DoctorDashboard />;
    }

    return <AdminDashboard />;
};

export default Dashboard;
import DepartmentsGrid from "../components/departments/DepartmentsGrid";
import Header from "../components/layout/Header";

const Departments = () => {
    return (
        <main role="main" className="bg-slate-50 min-h-screen">
            <Header />
            <DepartmentsGrid />
        </main>
    );
};

export default Departments;

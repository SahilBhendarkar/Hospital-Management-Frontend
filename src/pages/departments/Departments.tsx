import DepartmentsGrid from "../../components/departments/DepartmentsGrid";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Departments = () => {
    return (
        <main role="main" className="bg-slate-300 min-h-screen">
            <Header />
            <DepartmentsGrid />
            <Footer />
        </main>
    );
};

export default Departments;

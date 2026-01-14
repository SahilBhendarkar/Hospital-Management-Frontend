import DashboardLayout from "./DashboardLayout";

const DoctorDashboard = () => {
    return (
        <DashboardLayout
            title="Doctor Dashboard"
            subtitle="Manage patients, appointments & clinical work"
            stats={[
                { title: "Today's Appointments", value: "18", color: "from-blue-500 to-blue-600" },
                { title: "Patients Assigned", value: "42", color: "from-green-500 to-green-600" },
                { title: "Pending Reports", value: "7", color: "from-amber-500 to-amber-600" },
                { title: "Surgeries Today", value: "3", color: "from-red-500 to-red-600" },
            ]}
            actions={[
                {
                    icon: "PT",
                    title: "Patient Records",
                    description: "Access patient medical history",
                    bg: "bg-purple-100",
                    text: "text-purple-700",
                },
                {
                    icon: "RX",
                    title: "Prescriptions",
                    description: "Create & manage prescriptions",
                    bg: "bg-indigo-100",
                    text: "text-indigo-700",
                },
            ]}
            notices={[
                {
                    title: "OPD Schedule",
                    description: "OPD timings updated for cardiology department",
                    color: "bg-yellow-50 border-yellow-200",
                },
            ]}
        />
    );
};

export default DoctorDashboard;

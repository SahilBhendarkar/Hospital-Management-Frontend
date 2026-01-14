import DashboardLayout from "./DashboardLayout";

const PatientDashboard = () => {
    return (
        <DashboardLayout
            title="Patient Dashboard"
            subtitle="View your appointments, reports, and billing details"
            stats={[
                { title: "Upcoming Appointments", value: "2", color: "from-blue-500 to-blue-600" },
                { title: "Prescriptions", value: "5", color: "from-green-500 to-green-600" },
                { title: "Pending Bills", value: "₹4,500", color: "from-amber-500 to-amber-600" },
                { title: "Reports Available", value: "3", color: "from-indigo-500 to-indigo-600" },
            ]}
            actions={[
                {
                    icon: "AP",
                    title: "Book Appointment",
                    description: "Schedule a doctor visit easily",
                    bg: "bg-blue-100",
                    text: "text-blue-700",
                },
                {
                    icon: "RP",
                    title: "View Reports",
                    description: "Access lab & diagnostic reports",
                    bg: "bg-green-100",
                    text: "text-green-700",
                },
            ]}
            notices={[
                {
                    title: "Appointment Reminder",
                    description: "Your cardiology appointment is tomorrow at 10:30 AM",
                    color: "bg-blue-50 border-blue-200",
                },
            ]}
        />
    );
};

export default PatientDashboard;

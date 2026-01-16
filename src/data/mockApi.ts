export interface User {
    email: string;
    name?: string;
    role?: string;
}

export interface Appointment {
    time: string;
    patient: string;
    age: number;
    doctor: string;
    purpose: string;
    status: 'Confirmed' | 'Waiting' | 'Arrived' | 'Cancelled';
}

export interface Stat {
    title: string;
    value: string;
    color: string;
}

export interface DashboardData {
    appointments: Appointment[];
    stats: Stat[];
}

const MOCK_APPOINTMENTS: Appointment[] = [
    { time: "09:00", patient: "Aarav Sharma", age: 34, doctor: "Dr. Priya Mehta", purpose: "Follow-up", status: "Confirmed" },
    { time: "09:30", patient: "Priyanka Desai", age: 28, doctor: "Dr. Rajesh Kumar", purpose: "Consultation", status: "Waiting" },
    { time: "10:15", patient: "Vikram Patil", age: 45, doctor: "Dr. Priya Mehta", purpose: "Blood Test Review", status: "Confirmed" },
    { time: "11:00", patient: "Sneha Joshi", age: 19, doctor: "Dr. Anjali Verma", purpose: "First Visit", status: "Arrived" },
    { time: "11:45", patient: "Rohan Gupta", age: 52, doctor: "Dr. Rajesh Kumar", purpose: "Cardiology", status: "Confirmed" },
];

const MOCK_STATS: Stat[] = [
    { title: "Today's Appointments", value: "24", color: "from-blue-500 to-blue-600" },
    { title: "In-Patients", value: "18", color: "from-emerald-500 to-emerald-600" },
    { title: "Pending Bills", value: "₹1.24L", color: "from-amber-500 to-amber-600" },
    { title: "Doctors On Duty", value: "11", color: "from-indigo-500 to-indigo-600" },
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
    login: async (email: string): Promise<User> => {
        await delay(1000);
        if (!email.includes('@')) {
            throw new Error("Invalid email format");
        }

        let role = 'admin';
        if (email.toLowerCase().includes('patient')) {
            role = 'patient';
        } else if (email.toLowerCase().includes('doctor')) {
            role = 'doctor';
        }

        return { email, name: "Test User", role };
    },

    fetchDashboardData: async (): Promise<DashboardData> => {
        await delay(1500);
        return {
            appointments: MOCK_APPOINTMENTS,
            stats: MOCK_STATS
        };
    }
};

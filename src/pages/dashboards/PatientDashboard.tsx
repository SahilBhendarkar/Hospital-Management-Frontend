import { motion } from "framer-motion";

import {
    Activity,
    CalendarDays,
    CreditCard,
    FileText,
    HeartPulse,
    Pill,
    Search,
    Stethoscope,
    UserRound
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import DashboardShell
from "../../components/dashboard/DashboardShell";

import StatCard
from "../../components/common/StatCard";

const PatientDashboard = () => {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
        || "{}"
    );

    // SIDEBAR
    const sidebarItems = [

        {
            label: "Dashboard",
            icon: <Activity size={20} />,
            path: "/dashboard"
        },

        {
            label: "Appointments",
            icon: <CalendarDays size={20} />,
            path: "/dashboard/appointments"
        },

        {
            label: "Medical Reports",
            icon: <FileText size={20} />,
            path: "/dashboard/reports"
        },

        {
            label: "Prescriptions",
            icon: <Pill size={20} />,
            path: "/dashboard/prescriptions"
        },

        {
            label: "Doctors",
            icon: <Stethoscope size={20} />,
            path: "/doctors"
        }
    ];

    return (

        <DashboardShell
            title="Patient Dashboard"
            sidebarItems={sidebarItems}
        >

            {/* HERO */}
            <section
                className="
                    bg-gradient-to-r
                    from-teal-600
                    to-cyan-700
                    rounded-[32px]
                    p-8 lg:p-12
                    text-white
                    shadow-2xl
                    mb-10
                    relative overflow-hidden
                "
            >

                <div
                    className="
                        absolute
                        top-0 right-0
                        w-96 h-96
                        bg-white/10
                        rounded-full
                        blur-3xl
                    "
                />

                <div className="relative z-10">

                    <p
                        className="
                            uppercase
                            tracking-[3px]
                            text-cyan-100
                            text-sm
                            mb-4
                        "
                    >
                        Patient Portal
                    </p>

                    <h2
                        className="
                            text-4xl lg:text-5xl
                            font-bold
                            leading-tight
                            max-w-3xl
                        "
                    >
                        Welcome,
                        {" "}
                        {user?.name || user?.email}
                    </h2>

                    <p
                        className="
                            mt-5
                            text-cyan-100
                            max-w-2xl
                            text-lg
                        "
                    >
                        Access your appointments,
                        medical reports,
                        prescriptions,
                        billing,
                        and healthcare services
                        in one place.
                    </p>
                </div>
            </section>

            {/* STATS */}
            <section
                className="
                    grid grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                    mb-10
                "
            >

                <StatCard
                    title="Appointments"
                    value="3"
                    icon={
                        <div
                            className="
                                w-14 h-14
                                rounded-2xl
                                bg-teal-100
                                text-teal-700
                                flex items-center justify-center
                            "
                        >
                            <CalendarDays size={24} />
                        </div>
                    }
                    colorClass="
                        bg-white
                        rounded-3xl
                        border
                        shadow-sm
                    "
                    trend={{
                        value: "Tomorrow",
                        label: "General Checkup",
                        isPositive: true
                    }}
                />

                <StatCard
                    title="Prescriptions"
                    value="12"
                    icon={
                        <div
                            className="
                                w-14 h-14
                                rounded-2xl
                                bg-blue-100
                                text-blue-700
                                flex items-center justify-center
                            "
                        >
                            <Pill size={24} />
                        </div>
                    }
                    colorClass="
                        bg-white
                        rounded-3xl
                        border
                        shadow-sm
                    "
                    trend={{
                        value: "2 Active",
                        label: "Current Medications",
                        isPositive: true
                    }}
                />

                <StatCard
                    title="Medical Reports"
                    value="7"
                    icon={
                        <div
                            className="
                                w-14 h-14
                                rounded-2xl
                                bg-purple-100
                                text-purple-700
                                flex items-center justify-center
                            "
                        >
                            <FileText size={24} />
                        </div>
                    }
                    colorClass="
                        bg-white
                        rounded-3xl
                        border
                        shadow-sm
                    "
                />

                <StatCard
                    title="Health Score"
                    value="92%"
                    icon={
                        <div
                            className="
                                w-14 h-14
                                rounded-2xl
                                bg-emerald-100
                                text-emerald-700
                                flex items-center justify-center
                            "
                        >
                            <HeartPulse size={24} />
                        </div>
                    }
                    colorClass="
                        bg-white
                        rounded-3xl
                        border
                        shadow-sm
                    "
                />
            </section>

            {/* MAIN GRID */}
            <section
                className="
                    grid grid-cols-1
                    xl:grid-cols-12
                    gap-8
                "
            >

                {/* LEFT */}
                <div
                    className="
                        xl:col-span-8
                        space-y-8
                    "
                >

                    {/* UPCOMING APPOINTMENT */}
                    <div
                        className="
                            bg-white
                            rounded-[32px]
                            shadow-sm
                            border
                            p-8
                        "
                    >

                        <div
                            className="
                                flex items-center
                                justify-between
                                mb-8
                            "
                        >

                            <div>

                                <h2
                                    className="
                                        text-2xl
                                        font-bold
                                        text-gray-900
                                    "
                                >
                                    Upcoming Appointment
                                </h2>

                                <p
                                    className="
                                        text-gray-500
                                        mt-2
                                    "
                                >
                                    Your next scheduled consultation
                                </p>
                            </div>

                            <button
                                className="
                                    px-6 py-3
                                    rounded-2xl
                                    bg-teal-600
                                    text-white
                                    hover:bg-teal-700
                                    transition
                                "
                            >
                                Manage Appointment
                            </button>
                        </div>

                        <div
                            className="
                                border
                                rounded-3xl
                                p-6
                                flex flex-col lg:flex-row
                                lg:items-center
                                justify-between
                                gap-6
                            "
                        >

                            <div
                                className="
                                    flex items-center
                                    gap-5
                                "
                            >

                                <div
                                    className="
                                        w-20 h-20
                                        rounded-3xl
                                        bg-teal-100
                                        flex items-center justify-center
                                        text-teal-700
                                    "
                                >
                                    <UserRound size={36} />
                                </div>

                                <div>

                                    <h3
                                        className="
                                            text-2xl
                                            font-bold
                                            text-gray-900
                                        "
                                    >
                                        Dr. Sarah Williams
                                    </h3>

                                    <p
                                        className="
                                            text-gray-500
                                            mt-2
                                        "
                                    >
                                        Cardiology Specialist
                                    </p>

                                    <div
                                        className="
                                            flex items-center gap-3
                                            mt-4
                                            flex-wrap
                                        "
                                    >

                                        <span
                                            className="
                                                px-4 py-2
                                                rounded-full
                                                bg-teal-100
                                                text-teal-700
                                                text-sm
                                                font-semibold
                                            "
                                        >
                                            Tomorrow - 10:30 AM
                                        </span>

                                        <span
                                            className="
                                                px-4 py-2
                                                rounded-full
                                                bg-green-100
                                                text-green-700
                                                text-sm
                                                font-semibold
                                            "
                                        >
                                            Confirmed
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="
                                    flex gap-3
                                    flex-wrap
                                "
                            >

                                <button
                                    className="
                                        px-5 py-3
                                        rounded-2xl
                                        bg-teal-600
                                        text-white
                                        hover:bg-teal-700
                                        transition
                                    "
                                >
                                    Join Consultation
                                </button>

                                <button
                                    className="
                                        px-5 py-3
                                        rounded-2xl
                                        border
                                        hover:bg-slate-50
                                        transition
                                    "
                                >
                                    Reschedule
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* QUICK ACTIONS */}
                    <div
                        className="
                            bg-white
                            rounded-[32px]
                            shadow-sm
                            border
                            p-8
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                font-bold
                                mb-8
                            "
                        >
                            Quick Services
                        </h2>

                        <div
                            className="
                                grid grid-cols-1
                                md:grid-cols-2
                                gap-6
                            "
                        >

                            {[
                                {
                                    title: "Find Doctors",
                                    desc: "Browse specialists & departments",
                                    icon: Search,
                                    bg: "bg-blue-100",
                                    color: "text-blue-700",
                                    action: () => navigate("/doctors")
                                },

                                {
                                    title: "Medical Reports",
                                    desc: "Access diagnostics & records",
                                    icon: FileText,
                                    bg: "bg-purple-100",
                                    color: "text-purple-700"
                                },

                                {
                                    title: "Prescriptions",
                                    desc: "Manage medications & refills",
                                    icon: Pill,
                                    bg: "bg-orange-100",
                                    color: "text-orange-700"
                                },

                                {
                                    title: "Billing & Payments",
                                    desc: "View invoices & transactions",
                                    icon: CreditCard,
                                    bg: "bg-emerald-100",
                                    color: "text-emerald-700"
                                }

                            ].map((item, i) => {

                                const Icon =
                                    item.icon;

                                return (

                                    <motion.div
                                        key={i}
                                        whileHover={{
                                            y: -5
                                        }}
                                        onClick={item.action}
                                        className="
                                            border
                                            rounded-3xl
                                            p-6
                                            hover:shadow-lg
                                            transition
                                            cursor-pointer
                                        "
                                    >

                                        <div
                                            className={`
                                                w-14 h-14
                                                rounded-2xl
                                                flex items-center justify-center
                                                ${item.bg}
                                                ${item.color}
                                            `}
                                        >

                                            <Icon size={24} />
                                        </div>

                                        <h3
                                            className="
                                                text-lg
                                                font-bold
                                                mt-5
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                text-gray-500
                                                mt-2
                                            "
                                        >
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div
                    className="
                        xl:col-span-4
                        space-y-8
                    "
                >

                    {/* HEALTH SUMMARY */}
                    <div
                        className="
                            bg-white
                            rounded-[32px]
                            shadow-sm
                            border
                            p-8
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                font-bold
                                mb-8
                            "
                        >
                            Health Summary
                        </h2>

                        <div className="space-y-6">

                            {[
                                {
                                    label: "Blood Pressure",
                                    value: "120/80",
                                    color: "bg-green-500"
                                },

                                {
                                    label: "Heart Rate",
                                    value: "76 BPM",
                                    color: "bg-blue-500"
                                },

                                {
                                    label: "BMI",
                                    value: "22.4",
                                    color: "bg-purple-500"
                                }

                            ].map((item, i) => (

                                <div key={i}>

                                    <div
                                        className="
                                            flex items-center
                                            justify-between
                                            mb-2
                                        "
                                    >

                                        <p
                                            className="
                                                font-medium
                                                text-gray-700
                                            "
                                        >
                                            {item.label}
                                        </p>

                                        <p
                                            className="
                                                font-bold
                                                text-gray-900
                                            "
                                        >
                                            {item.value}
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            h-2
                                            rounded-full
                                            bg-slate-100
                                            overflow-hidden
                                        "
                                    >

                                        <div
                                            className={`
                                                h-full
                                                rounded-full
                                                ${item.color}
                                            `}
                                            style={{
                                                width: "80%"
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ACTIVE PRESCRIPTION */}
                    <div
                        className="
                            bg-white
                            rounded-[32px]
                            shadow-sm
                            border
                            p-8
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                font-bold
                                mb-8
                            "
                        >
                            Active Prescription
                        </h2>

                        <div
                            className="
                                border
                                rounded-3xl
                                p-6
                                bg-slate-50
                            "
                        >

                            <div
                                className="
                                    flex items-center gap-4
                                    mb-5
                                "
                            >

                                <div
                                    className="
                                        w-14 h-14
                                        rounded-2xl
                                        bg-orange-100
                                        text-orange-700
                                        flex items-center justify-center
                                    "
                                >
                                    <Pill size={26} />
                                </div>

                                <div>

                                    <h3
                                        className="
                                            font-bold
                                            text-lg
                                            text-gray-900
                                        "
                                    >
                                        Amoxicillin
                                    </h3>

                                    <p
                                        className="
                                            text-gray-500
                                            mt-1
                                        "
                                    >
                                        500mg - Twice Daily
                                    </p>
                                </div>
                            </div>

                            <button
                                className="
                                    w-full
                                    py-4
                                    rounded-2xl
                                    bg-teal-600
                                    text-white
                                    hover:bg-teal-700
                                    transition
                                    font-semibold
                                "
                            >
                                Download Prescription
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </DashboardShell>
    );
};

export default PatientDashboard;
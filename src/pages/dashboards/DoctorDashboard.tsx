import { motion } from "framer-motion";

import {
    Activity,
    CalendarDays,
    ClipboardList,
    FileText,
    HeartPulse,
    MessageCircle,
    Stethoscope,
    Users
} from "lucide-react";

import DashboardShell
from "../../components/dashboard/DashboardShell";

import StatCard
from "../../components/common/StatCard";

const DoctorDashboard = () => {

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
            label: "Patients",
            icon: <Users size={20} />,
            path: "/dashboard/patients"
        },

        {
            label: "Reports",
            icon: <FileText size={20} />,
            path: "/dashboard/reports"
        },

        {
            label: "Consultations",
            icon: <Stethoscope size={20} />,
            path: "/dashboard/consultations"
        }
    ];

    return (

        <DashboardShell
            title="Doctor Dashboard"
            sidebarItems={sidebarItems}
        >

            {/* HERO */}
            <section
                className="
                    bg-gradient-to-r
                    from-indigo-700
                    to-purple-700
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
                            text-indigo-100
                            text-sm
                            mb-4
                        "
                    >
                        Doctor Workspace
                    </p>

                    <h2
                        className="
                            text-4xl lg:text-5xl
                            font-bold
                            leading-tight
                            max-w-3xl
                        "
                    >
                        Welcome Back,
                        {" "}
                        Dr. {user?.name || "Smith"}
                    </h2>

                    <p
                        className="
                            mt-5
                            text-indigo-100
                            max-w-2xl
                            text-lg
                        "
                    >
                        Manage appointments,
                        consultations, reports,
                        patient records,
                        and live medical updates
                        efficiently.
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
                    title="Today's Appointments"
                    value="8"
                    icon={
                        <div
                            className="
                                w-14 h-14
                                rounded-2xl
                                bg-indigo-100
                                text-indigo-700
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
                        value: "12%",
                        label: "vs yesterday",
                        isPositive: true
                    }}
                />

                <StatCard
                    title="Pending Reports"
                    value="5"
                    icon={
                        <div
                            className="
                                w-14 h-14
                                rounded-2xl
                                bg-orange-100
                                text-orange-700
                                flex items-center justify-center
                            "
                        >
                            <ClipboardList size={24} />
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
                    title="Patient Messages"
                    value="3"
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
                            <MessageCircle size={24} />
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
                    title="Consultations"
                    value="21"
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

                    {/* UPCOMING APPOINTMENTS */}
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
                                    Upcoming Appointments
                                </h2>

                                <p
                                    className="
                                        text-gray-500
                                        mt-2
                                    "
                                >
                                    Your scheduled consultations today
                                </p>
                            </div>

                            <button
                                className="
                                    px-6 py-3
                                    rounded-2xl
                                    bg-indigo-600
                                    text-white
                                    hover:bg-indigo-700
                                    transition
                                "
                            >
                                View Schedule
                            </button>
                        </div>

                        <div className="space-y-5">

                            {[
                                {
                                    patient: "Sarah Johnson",
                                    time: "10:30 AM",
                                    dept: "Cardiology Follow-up",
                                    status: "Confirmed"
                                },

                                {
                                    patient: "Michael Brown",
                                    time: "11:15 AM",
                                    dept: "General Consultation",
                                    status: "Waiting"
                                },

                                {
                                    patient: "Emma Wilson",
                                    time: "12:00 PM",
                                    dept: "Neurology Review",
                                    status: "Arrived"
                                }

                            ].map((appt, i) => (

                                <motion.div
                                    key={i}
                                    whileHover={{
                                        y: -3
                                    }}
                                    className="
                                        border
                                        rounded-3xl
                                        p-5
                                        flex flex-col lg:flex-row
                                        lg:items-center
                                        justify-between
                                        gap-5
                                        hover:shadow-md
                                        transition
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
                                                w-16 h-16
                                                rounded-2xl
                                                bg-indigo-100
                                                flex items-center justify-center
                                                text-indigo-700
                                                font-bold text-xl
                                            "
                                        >
                                            {appt.patient.charAt(0)}
                                        </div>

                                        <div>

                                            <h3
                                                className="
                                                    font-bold
                                                    text-lg
                                                    text-gray-900
                                                "
                                            >
                                                {appt.patient}
                                            </h3>

                                            <p
                                                className="
                                                    text-gray-500
                                                    mt-1
                                                "
                                            >
                                                {appt.dept}
                                            </p>

                                            <p
                                                className="
                                                    text-sm
                                                    text-indigo-600
                                                    mt-1
                                                    font-medium
                                                "
                                            >
                                                {appt.time}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="
                                            flex items-center
                                            gap-3
                                        "
                                    >

                                        <span
                                            className={`
                                                px-4 py-2
                                                rounded-full
                                                text-xs
                                                font-semibold

                                                ${
                                                    appt.status === "Confirmed"
                                                        ? "bg-green-100 text-green-700"
                                                        : appt.status === "Waiting"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-blue-100 text-blue-700"
                                                }
                                            `}
                                        >
                                            {appt.status}
                                        </span>

                                        <button
                                            className="
                                                px-4 py-2
                                                rounded-xl
                                                bg-indigo-600
                                                text-white
                                                hover:bg-indigo-700
                                                transition
                                                text-sm
                                            "
                                        >
                                            Open
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
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
                            Quick Actions
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
                                    title: "Medical Reports",
                                    desc: "Review patient diagnostics",
                                    icon: FileText,
                                    bg: "bg-blue-100",
                                    color: "text-blue-700"
                                },

                                {
                                    title: "Patient Records",
                                    desc: "Access patient history",
                                    icon: Users,
                                    bg: "bg-emerald-100",
                                    color: "text-emerald-700"
                                },

                                {
                                    title: "Consultations",
                                    desc: "Manage consultations",
                                    icon: Stethoscope,
                                    bg: "bg-purple-100",
                                    color: "text-purple-700"
                                },

                                {
                                    title: "Messages",
                                    desc: "Respond to patient queries",
                                    icon: MessageCircle,
                                    bg: "bg-orange-100",
                                    color: "text-orange-700"
                                }

                            ].map((item, i) => {

                                const Icon = item.icon;

                                return (

                                    <motion.div
                                        key={i}
                                        whileHover={{
                                            y: -5
                                        }}
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

                    {/* NEXT CONSULTATION */}
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
                            Next Consultation
                        </h2>

                        <div
                            className="
                                flex flex-col
                                items-center
                                text-center
                            "
                        >

                            <div
                                className="
                                    w-28 h-28
                                    rounded-full
                                    bg-indigo-100
                                    flex items-center justify-center
                                    text-4xl
                                    font-bold
                                    text-indigo-700
                                    mb-6
                                "
                            >
                                S
                            </div>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                "
                            >
                                Sarah Johnson
                            </h3>

                            <p
                                className="
                                    text-gray-500
                                    mt-2
                                "
                            >
                                Cardiology Follow-up
                            </p>

                            <div
                                className="
                                    mt-6
                                    flex items-center gap-3
                                "
                            >

                                <span
                                    className="
                                        px-4 py-2
                                        rounded-full
                                        bg-indigo-100
                                        text-indigo-700
                                        text-sm
                                        font-semibold
                                    "
                                >
                                    10:30 AM
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

                            <button
                                className="
                                    mt-8
                                    w-full
                                    py-4
                                    rounded-2xl
                                    bg-indigo-600
                                    text-white
                                    hover:bg-indigo-700
                                    transition
                                    font-semibold
                                "
                            >
                                Start Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </DashboardShell>
    );
};

export default DoctorDashboard;
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
    Activity,
    CalendarDays,
    ClipboardList,
    HeartPulse,
    Stethoscope,
    Users,
    Building2,
    FileText
} from "lucide-react";

import DashboardShell
    from "../../components/dashboard/DashboardShell";

import {
    useAppDispatch,
    useAppSelector
} from "../../store/store";

import {
    fetchDashboard
} from "../../store/slices/dashboardSlice";

import StatCard
    from "../../components/common/StatCard";

import Table
    from "../../components/common/Table";

const AdminDashboard = () => {

    const dispatch =
        useAppDispatch();

    const {
        stats,
        appointments,
        loading,
        error
    } = useAppSelector(
        (state) => state.dashboard
    );

    useEffect(() => {

        dispatch(fetchDashboard());

    }, [dispatch]);

    // SIDEBAR
    const sidebarItems = [

        {
            label: "Dashboard",
            icon: <Activity size={20} />,
            path: "/dashboard"
        },

        {
            label: "Doctors",
            icon: <Stethoscope size={20} />,
            path: "/doctors"
        },

        {
            label: "Patients",
            icon: <Users size={20} />,
            path: "/dashboard/patients"
        },

        {
            label: "Departments",
            icon: <Building2 size={20} />,
            path: "/departments"
        },

        {
            label: "Reports",
            icon: <FileText size={20} />,
            path: "/dashboard/reports"
        },
        {
            label: "Health Plans",
            icon: <ClipboardList size={20} />,
            path: "/health-plans"
        }
    ];

    if (loading) {

        return (

            <div
                className="
                    min-h-screen
                    flex items-center
                    justify-center
                    bg-slate-50
                "
            >

                <div className="text-center">

                    <div
                        className="
                            w-16 h-16
                            border-4 border-blue-600
                            border-t-transparent
                            rounded-full
                            animate-spin
                            mx-auto mb-5
                        "
                    />

                    <p className="text-gray-600">
                        Loading Dashboard...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {

        return (

            <div
                className="
                    min-h-screen
                    flex items-center
                    justify-center
                    bg-slate-50
                "
            >

                <div
                    className="
                        bg-white
                        p-10
                        rounded-3xl
                        shadow-xl
                        max-w-md
                        text-center
                    "
                >

                    <div
                        className="
                            w-16 h-16
                            rounded-full
                            bg-red-100
                            flex items-center justify-center
                            mx-auto mb-5
                        "
                    >

                        <Activity
                            className="text-red-600"
                            size={30}
                        />
                    </div>

                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-gray-900
                            mb-3
                        "
                    >
                        Failed to Load Dashboard
                    </h2>

                    <p className="text-gray-600 mb-6">
                        {error}
                    </p>

                    <button
                        onClick={() =>
                            dispatch(fetchDashboard())
                        }
                        className="
                            px-6 py-3
                            rounded-2xl
                            bg-blue-600
                            text-white
                            hover:bg-blue-700
                            transition
                        "
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (

        <DashboardShell
            title="Admin Dashboard"
            sidebarItems={sidebarItems}
        >

            {/* HERO */}
            <section
                className="
                    bg-gradient-to-r
                    from-blue-700
                    to-indigo-700
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
                            text-blue-100
                            text-sm
                            mb-4
                        "
                    >
                        Hospital Overview
                    </p>

                    <h2
                        className="
                            text-4xl lg:text-5xl
                            font-bold
                            leading-tight
                            max-w-3xl
                        "
                    >
                        Manage your hospital
                        operations efficiently
                    </h2>

                    <p
                        className="
                            mt-5
                            text-blue-100
                            max-w-2xl
                            text-lg
                        "
                    >
                        Monitor appointments,
                        doctors, patients,
                        departments, reports,
                        and live hospital analytics
                        in real time.
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

                {stats.map((stat, i) => (

                    <StatCard
                        key={i}
                        title={stat.title}
                        value={stat.value}
                        colorClass="
                            bg-white
                            rounded-3xl
                            border
                            shadow-sm
                            hover:shadow-lg
                            transition-all
                        "
                        icon={
                            <div
                                className={`
                                    w-14 h-14
                                    rounded-2xl
                                    flex items-center justify-center
                                    bg-gradient-to-r
                                    ${stat.color}
                                `}
                            >

                                <HeartPulse
                                    className="text-white"
                                    size={24}
                                />
                            </div>
                        }
                    />
                ))}
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

                    {/* APPOINTMENTS */}
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
                                    Today's Appointments
                                </h2>

                                <p
                                    className="
                                        text-gray-500
                                        mt-2
                                    "
                                >
                                    Real-time patient scheduling
                                </p>
                            </div>

                            <button
                                className="
                                    px-6 py-3
                                    rounded-2xl
                                    bg-blue-600
                                    text-white
                                    hover:bg-blue-700
                                    transition
                                    font-medium
                                "
                            >
                                New Appointment
                            </button>
                        </div>

                        <Table
                            data={appointments}
                            keyExtractor={(appt) =>
                                `${appt.patient}-${appt.time}`
                            }
                            columns={[
                                {
                                    header: "Time",
                                    accessor: "time"
                                },

                                {
                                    header: "Patient",
                                    accessor: (appt) => (
                                        <div>

                                            <p
                                                className="
                                                    font-semibold
                                                    text-gray-900
                                                "
                                            >
                                                {appt.patient}
                                            </p>

                                            <p
                                                className="
                                                    text-xs
                                                    text-gray-500
                                                    mt-1
                                                "
                                            >
                                                Age {appt.age}
                                            </p>
                                        </div>
                                    )
                                },

                                {
                                    header: "Doctor",
                                    accessor: "doctor"
                                },

                                {
                                    header: "Purpose",
                                    accessor: "purpose"
                                },

                                {
                                    header: "Status",
                                    accessor: (appt) => (

                                        <span
                                            className={`
                                                px-3 py-1
                                                rounded-full
                                                text-xs
                                                font-semibold

                                                ${appt.status === "Confirmed"
                                                    ? "bg-green-100 text-green-700"
                                                    : appt.status === "Waiting"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : appt.status === "Arrived"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : "bg-red-100 text-red-700"
                                                }
                                            `}
                                        >
                                            {appt.status}
                                        </span>
                                    )
                                }
                            ]}
                        />
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
                                    title: "Appointments",
                                    desc: "Manage hospital scheduling",
                                    icon: CalendarDays,
                                    bg: "bg-blue-100",
                                    color: "text-blue-700"
                                },

                                {
                                    title: "Doctors",
                                    desc: "Manage doctor availability",
                                    icon: Stethoscope,
                                    bg: "bg-purple-100",
                                    color: "text-purple-700"
                                },

                                {
                                    title: "Patients",
                                    desc: "View patient records",
                                    icon: Users,
                                    bg: "bg-emerald-100",
                                    color: "text-emerald-700"
                                },

                                {
                                    title: "Reports",
                                    desc: "Access medical analytics",
                                    icon: ClipboardList,
                                    bg: "bg-orange-100",
                                    color: "text-orange-700"
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

                    {/* LIVE ACTIVITY */}
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
                            Live Activity
                        </h2>

                        <div className="space-y-6">

                            {[
                                {
                                    patient: "Ramesh Patel",
                                    dept: "Cardiology",
                                    status: "Admitted",
                                    color: "bg-red-100 text-red-700"
                                },

                                {
                                    patient: "Anita Sharma",
                                    dept: "Gynecology",
                                    status: "Observation",
                                    color: "bg-yellow-100 text-yellow-700"
                                },

                                {
                                    patient: "Mohit Verma",
                                    dept: "Orthopedics",
                                    status: "Discharged",
                                    color: "bg-green-100 text-green-700"
                                }

                            ].map((item, i) => (

                                <div
                                    key={i}
                                    className="
                                        flex items-center
                                        justify-between
                                    "
                                >

                                    <div>

                                        <p
                                            className="
                                                font-semibold
                                                text-gray-900
                                            "
                                        >
                                            {item.patient}
                                        </p>

                                        <p
                                            className="
                                                text-sm
                                                text-gray-500
                                                mt-1
                                            "
                                        >
                                            {item.dept}
                                        </p>
                                    </div>

                                    <span
                                        className={`
                                            px-3 py-1
                                            rounded-full
                                            text-xs
                                            font-semibold
                                            ${item.color}
                                        `}
                                    >
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </DashboardShell>
    );
};

export default AdminDashboard;
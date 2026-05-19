import type { ReactNode } from "react";

import {
    Bell,
    LogOut,
    Menu,
    Search,
    Settings
} from "lucide-react";

import {
    Link,
    useLocation
} from "react-router-dom";

interface DashboardShellProps {

    children: ReactNode;

    sidebarItems: {
        label: string;
        icon: ReactNode;
        path: string;
    }[];

    title: string;
}

const DashboardShell = ({
    children,
    sidebarItems,
    title
}: DashboardShellProps) => {

    const location = useLocation();

    const user = JSON.parse(
        localStorage.getItem("user")
        || "{}"
    );

    // LOGOUT
    const handleLogout = () => {

        localStorage.removeItem("user");

        window.location.href = "/";
    };

    return (

        <div
            className="
                min-h-screen
                bg-[#F4F7FB]
                flex
            "
        >

            {/* SIDEBAR */}
            <aside
                className="
                    hidden lg:flex
                    flex-col
                    fixed
                    inset-y-0 left-0
                    w-72
                    bg-[#0F172A]
                    text-white
                    z-50
                    shadow-2xl
                "
            >

                {/* LOGO */}
                <div
                    className="
                        px-8 py-8
                        border-b border-white/10
                    "
                >

                    <h1
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                        "
                    >
                        MediCare
                    </h1>

                    <p
                        className="
                            text-sm
                            text-slate-400
                            mt-1
                        "
                    >
                        Hospital Management
                    </p>
                </div>

                {/* MENU */}
                <nav
                    className="
                        flex-1
                        px-5 py-6
                        space-y-3
                    "
                >

                    {sidebarItems.map((item) => {

                        const active =
                            location.pathname === item.path;

                        return (

                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                                    flex items-center
                                    gap-4
                                    px-5 py-4
                                    rounded-2xl
                                    transition-all
                                    font-medium

                                    ${
                                        active
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                                    }
                                `}
                            >

                                {item.icon}

                                <span>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* USER */}
                <div
                    className="
                        p-5
                        border-t border-white/10
                    "
                >

                    <div
                        className="
                            flex items-center
                            gap-4
                            mb-5
                        "
                    >

                        <div
                            className="
                                w-12 h-12
                                rounded-full
                                bg-blue-600
                                flex items-center justify-center
                                text-lg font-bold
                            "
                        >
                            {user?.name?.charAt(0) || "A"}
                        </div>

                        <div>

                            <p
                                className="
                                    font-semibold
                                "
                            >
                                {user?.name || "Admin"}
                            </p>

                            <p
                                className="
                                    text-sm
                                    text-slate-400
                                    capitalize
                                "
                            >
                                {user?.role || "admin"}
                            </p>
                        </div>
                    </div>

                    {/* LOGOUT */}
                    <button
                        onClick={handleLogout}
                        className="
                            w-full
                            py-4
                            rounded-2xl
                            bg-red-500
                            hover:bg-red-600
                            transition
                            flex items-center
                            justify-center
                            gap-3
                            font-semibold
                        "
                    >

                        <LogOut size={20} />

                        Logout
                    </button>
                </div>
            </aside>

            {/* MAIN */}
            <div
                className="
                    flex-1
                    lg:ml-72
                "
            >

                {/* TOPBAR */}
                <header
                    className="
                        sticky top-0
                        z-40
                        bg-white/90
                        backdrop-blur-lg
                        border-b
                        px-6 lg:px-10
                        py-5
                        flex items-center
                        justify-between
                    "
                >

                    {/* LEFT */}
                    <div
                        className="
                            flex items-center
                            gap-4
                        "
                    >

                        <button
                            className="
                                lg:hidden
                                w-12 h-12
                                rounded-2xl
                                border
                                flex items-center justify-center
                            "
                        >
                            <Menu size={22} />
                        </button>

                        <div>

                            <h1
                                className="
                                    text-2xl
                                    font-bold
                                    text-gray-900
                                "
                            >
                                {title}
                            </h1>

                            <p
                                className="
                                    text-sm
                                    text-gray-500
                                    mt-1
                                "
                            >
                                Welcome back,
                                {" "}
                                {user?.name || "Admin"}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        className="
                            flex items-center
                            gap-4
                        "
                    >

                        {/* SEARCH */}
                        <div
                            className="
                                hidden md:flex
                                items-center
                                gap-3
                                px-5 py-3
                                rounded-2xl
                                bg-slate-100
                                min-w-[320px]
                            "
                        >

                            <Search
                                size={18}
                                className="
                                    text-gray-400
                                "
                            />

                            <input
                                type="text"
                                placeholder="Search..."
                                className="
                                    bg-transparent
                                    outline-none
                                    w-full
                                "
                            />
                        </div>

                        {/* NOTIFICATION */}
                        <button
                            className="
                                relative
                                w-12 h-12
                                rounded-2xl
                                bg-slate-100
                                flex items-center justify-center
                            "
                        >

                            <Bell size={20} />

                            <span
                                className="
                                    absolute top-2 right-2
                                    w-2.5 h-2.5
                                    rounded-full
                                    bg-red-500
                                "
                            />
                        </button>

                        {/* SETTINGS */}
                        <button
                            className="
                                w-12 h-12
                                rounded-2xl
                                bg-slate-100
                                flex items-center justify-center
                            "
                        >
                            <Settings size={20} />
                        </button>
                    </div>
                </header>

                {/* PAGE CONTENT */}
                <main
                    className="
                        p-6 lg:p-10
                    "
                >
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardShell;
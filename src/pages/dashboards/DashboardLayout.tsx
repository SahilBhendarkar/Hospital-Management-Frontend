import Header from "../../components/layout/Header";

interface Stat {
    title: string;
    value: string;
    color: string;
}

interface DashboardLayoutProps {
    title: string;
    subtitle: string;
    stats: Stat[];
    actions: {
        icon: string;
        title: string;
        description: string;
        bg: string;
        text: string;
    }[];
    notices: {
        title: string;
        description: string;
        color: string;
    }[];
}

const DashboardLayout = ({
    title,
    subtitle,
    stats,
    actions,
    notices,
}: DashboardLayoutProps) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            {/* Hero */}
            <section className="pt-16 pb-12 text-center px-6">
                <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">{subtitle}</p>
            </section>

            {/* Stats */}
            <section className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl border shadow-sm overflow-hidden"
                    >
                        <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                        <div className="p-6">
                            <p className="text-sm text-gray-500">{stat.title}</p>
                            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Main */}
            <section className="px-6 pb-20 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
                {/* Actions */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {actions.map((action, i) => (
                        <div
                            key={i}
                            className={`rounded-xl p-6 border bg-white hover:${action.bg} transition`}
                        >
                            <div className={`w-12 h-12 rounded-full ${action.bg} flex items-center justify-center font-bold ${action.text}`}>
                                {action.icon}
                            </div>
                            <h3 className="font-semibold mt-4">{action.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{action.description}</p>
                        </div>
                    ))}
                </div>

                {/* Notices */}
                <div className="lg:col-span-4 space-y-4">
                    {notices.map((notice, i) => (
                        <div
                            key={i}
                            className={`p-4 rounded-lg border ${notice.color}`}
                        >
                            <h4 className="text-sm font-semibold">{notice.title}</h4>
                            <p className="text-xs text-gray-600 mt-1">
                                {notice.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DashboardLayout;

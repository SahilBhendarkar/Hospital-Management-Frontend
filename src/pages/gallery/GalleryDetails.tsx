import { useLocation, Navigate } from "react-router-dom";
import Header from "../../components/layout/Header";

const GalleryDetails = () => {
    const { state } = useLocation();

    if (!state) {
        return <Navigate to="/gallery" replace />;
    }

    const { title, description, image, type } = state;

    return (
        <main className="bg-slate-50 min-h-screen">
            <Header />

            <section className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                    <div className="max-w-6xl mx-auto px-6 text-white">
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <p className="mt-2 text-white/90 capitalize">
                            {type}
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 py-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    {description}
                </p>
            </section>
        </main>
    );
};

export default GalleryDetails;

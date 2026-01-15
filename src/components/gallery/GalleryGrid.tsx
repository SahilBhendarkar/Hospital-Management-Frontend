import GalleryCard from "./GalleryCard";

interface GalleryItem {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface Props {
    items: GalleryItem[];
}

const GalleryGrid = ({ items }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {items.map((item) => (
                <GalleryCard
                    key={item.link}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                />
            ))}
        </div>
    );
};

export default GalleryGrid;

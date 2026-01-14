import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";

export interface GalleryItem {
    id: number;
    type: "event" | "image";
    date?: string;
    title: string;
    description: string;
    image: string;
}

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        type: "event",
        date: "17 Mar 2026",
        title: "Umbergaon Taluka Medico Club",
        description:
            "Medical professionals gathering for knowledge exchange, collaboration, and networking.",
        image: event1,
    },
    {
        id: 2,
        type: "event",
        date: "10 Mar 2026",
        title: "Ankleshwar Doctors Cricket Tournament",
        description:
            "Annual cricket tournament promoting sportsmanship and wellness among doctors.",
        image: event2,
    },
    {
        id: 3,
        type: "event",
        date: "09 Mar 2026",
        title: "Senior Citizen Health Camp",
        description:
            "Free health check-up camp focusing on preventive care for senior citizens.",
        image: event3,
    },
];

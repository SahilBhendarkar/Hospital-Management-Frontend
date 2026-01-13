export interface Doctor {
    id: number;
    name: string;
    specialization: string;
    qualification: string;
    experience: string;
    image: string;
    profileUrl: string;
}

export const doctors: Doctor[] = [
    {
        id: 1,
        name: "Dr. Anil Sharma",
        specialization: "Orthopaedic Surgeon",
        qualification: "MBBS, MS (Ortho)",
        experience: "15+ Years",
        image: "/images/doctors/doctor-1.png",
        profileUrl: "/doctors/anil-sharma",
    },
    {
        id: 2,
        name: "Dr. Priya Mehta",
        specialization: "Cardiologist",
        qualification: "MBBS, DM (Cardiology)",
        experience: "12+ Years",
        image: "/images/doctors/doctor-2.png",
        profileUrl: "/doctors/priya-mehta",
    },
];

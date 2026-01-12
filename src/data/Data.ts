
export const services = [
  {
    name: "Oncosurgery",
    image: "Oncosurgery.png",
  },
  {
    name: "Endoscopy",
    image: "endoscopy.png",
  },
  {
    name: "Plastic & Reconstructive Surgery",
    image: "Plastic-Reconstructive-surgery.png",
  },
  {
    name: "Cardiology",
    image: "cardiology-1.png",
  },
  {
    name: "Laparoscopic Surgery",
    image: "Laparoscopic-Surgery-4.png",
  },
  {
    name: "Joint Replacement",
    image: "Join-replacement1.png",
  },
  {
    name: "Palliative Care",
    image: "Palliative-pain-management.png",
  },
  {
    name: "Radiology",
    image: "Radiology.png",
  },
  
  {
    name: "ENT Surgery",
    image: "ENT-surgery-1-1.png",
  },
  {
    name: "Critical Care & ICU",
    image: "Critical-Care-Medicine-ICU.png",
  },
  {
    name: "Orthopedics & Trauma",
    image: "Orthopedics-and-trauma.png",
  },
  {
    name: "Gastroenterology",
    image: "Gastroenterology.png",
  },
  {
    name: "Neurosurgery & Neurology",
    image: "neurosurgery-and-neurology.png",
  },
  {
    name: "Pathology",
    image: "pathalogy.png",
  },
  {
    name: "Ophthalmology (Eye Care)",
    image: "ophtalmology.png",
  },
  {
    name: "Nephrology",
    image: "nephrology.png",
  },
  {
    name: "Advanced Dialysis Unit",
    image: "Dedicated-advanced-Dialysis-Unit.png",
  },
];
export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  
}

export const heroSlides = [
  { image: "/slider/slider1.png", title: "24/7 Emergency Care", subtitle: "Life-Saving Response", description: "Immediate attention with world-class trauma care." },
  { image: "/slider/slider2.png", title: "Advanced Treatment", subtitle: "Cutting-Edge Technology", description: "Latest diagnostics & personalized care plans." },
];


export interface Department {
  name: string;
  link: string;
}

export interface BodyPart {
  id: number;
  name: string;
  image: string;
  departments: Department[];
  angle: number;
  category: "upper" | "lower";
}

export const bodyParts: BodyPart[] = [
  // ================= UPPER BODY =================
  {
    id: 1,
    name: "Brain",
    image: "/anatomy/human-brain.jpg",
    departments: [{ name: "Neurology & Neurosurgery", link: "/neurology" }],
    angle: 0,
    category: "upper",
  },
  {
    id: 2,
    name: "Eye",
    image: "/anatomy/human-eye.jpg",
    departments: [{ name: "Ophthalmology", link: "/ophthalmology" }],
    angle: 36,
    category: "upper",
  },
  {
    id: 3,
    name: "Ear",
    image: "/anatomy/human-ear.jpg",
    departments: [{ name: "ENT – Laryngology", link: "/ent" }],
    angle: 324,
    category: "upper",
  },
  {
    id: 4,
    name: "Nose",
    image: "/anatomy/human-ent.jpg",
    departments: [{ name: "ENT – Laryngology", link: "/ent" }],
    angle: 288,
    category: "upper",
  },
  {
    id: 5,
    name: "Chest",
    image: "/anatomy/human-chest.jpg",
    departments: [{ name: "Pulmonary Medicine", link: "/pulmonary" }],
    angle: 252,
    category: "upper",
  },
  {
    id: 6,
    name: "Heart",
    image: "/anatomy/human-heart.jpg",
    departments: [{ name: "Cardiology", link: "/cardiology" }],
    angle: 216,
    category: "upper",
  },
  {
    id: 7,
    name: "Liver",
    image: "/anatomy/human-liver.jpg",
    departments: [{ name: "Gastroenterology", link: "/gastroenterology" }],
    angle: 180,
    category: "upper",
  },
  {
    id: 8,
    name: "Arm",
    image: "/anatomy/human-hands.jpg",
    departments: [{ name: "Orthopedics", link: "/orthopedics" }],
    angle: 108,
    category: "upper",
  },
  {
    id: 9,
    name: "Elbow",
    image: "/anatomy/human-hands.jpg",
    departments: [{ name: "Orthopedics", link: "/orthopedics" }],
    angle: 144,
    category: "upper",
  },
  {
    id: 10,
    name: "Vocal Cord",
    image: "/anatomy/human-vocal-cord.jpg",
    departments: [{ name: "ENT & Voice Care", link: "/ent-voice" }],
    angle: 72,
    category: "upper",
  },

  // ================= LOWER BODY =================
  {
    id: 11,
    name: "Kidney",
    image: "/anatomy/human-kidney.jpg",
    departments: [{ name: "Nephrology & Urology", link: "/nephrology" }],
    angle: 36,
    category: "lower",
  },
  {
    id: 12,
    name: "Stomach",
    image: "/anatomy/human-stomach.jpg",
    departments: [{ name: "Gastroenterology", link: "/gastroenterology" }],
    angle: 0,
    category: "lower",
  },
  {
    id: 13,
    name: "Lower Back",
    image: "/anatomy/human-spine.jpg",
    departments: [{ name: "Spine Surgery & Physiotherapy", link: "/spine" }],
    angle: 324,
    category: "lower",
  },
  {
    id: 14,
    name: "Reproductive System",
    image: "/anatomy/human-gynecology.jpg",
    departments: [{ name: "Gynecology & Urology", link: "/gynecology" }],
    angle: 72,
    category: "lower",
  },
  {
    id: 15,
    name: "Hip",
    image: "/anatomy/human-hip.jpg",
    departments: [{ name: "Orthopedics", link: "/orthopedics" }],
    angle: 288,
    category: "lower",
  },
  {
    id: 16,
    name: "Thigh",
    image: "/anatomy/thigh-service-icon.png",
    departments: [{ name: "Orthopedics", link: "/orthopedics" }],
    angle: 252,
    category: "lower",
  },
  {
    id: 17,
    name: "Knee",
    image: "/anatomy/human-knee.jpg",
    departments: [{ name: "Orthopedics", link: "/orthopedics" }],
    angle: 108,
    category: "lower",
  },
  {
    id: 18,
    name: "Varicose Vein",
    image: "/anatomy/human-leg.jpg",
    departments: [{ name: "Vascular Surgery", link: "/vascular" }],
    angle: 216,
    category: "lower",
  },
  {
    id: 19,
    name: "Ankle",
    image: "/anatomy/human-leg.jpg",
    departments: [{ name: "Orthopedics", link: "/orthopedics" }],
    angle: 144,
    category: "lower",
  },
  {
    id: 20,
    name: "Foot",
    image: "/anatomy/human-leg.jpg",
    departments: [{ name: "Orthopedics", link: "/orthopedics" }],
    angle: 180,
    category: "lower",
  },
];



export const teamMembers = [
  {
    name: "Dr. Hiren V. Shah",
    degree: "M.S. (Orthopaedics)",
    experience: "15+ years of experience",
    image: "/team/Hiren.png",
  },
  {
    name: "Dr. Nainesh B. Patel",
    degree: "M.B.B.S., MS, FMAS, FIAGES, FALS",
    experience: "13+ years of experience",
    image: "/team/Nainesh.png",  },
  {
    name: "Dr. Rajiv B. Pandya",
    degree: "M.D. Medicine",
    experience: "13+ years of experience",
    image: "/team/Rajiv.png",
  },
  {
    name: "Dr. Ankur K. Chaudhari",
    degree: "MD (Medicine), Fellow in 2D Echo",
    experience: "13+ years of experience",
    image: "/team/Ankur.png",
  },
];


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



export interface BodyPart {
  id: number;
  name: string;
  image: string;
  category: "upper" | "lower";
}

export type BodyCategory = "upper" | "lower";
export interface BodyPart {
  name: string;
  image: string;
  department: string;
  angle: number;
  category: "upper" | "lower";
}
export interface Department {
  name: string;
  link: string;
}

export interface BodyPart {
  name: string;
  image: string;          
  angle: number;           
  departments: Department[];
}
export const bodyParts: BodyPart[] = [
  // ================= UPPER BODY =================

  {
    name: "Brain",
    image: "/anatomy/human-brain.jpg",
    department: "Neurology & Neurosurgery",
    angle: 0,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Eye",
    image: "/anatomy/human-eye.jpg",
    department: "Ophthalmology",
    angle: 36,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Ear",
    image: "/anatomy/human-ear.jpg",
    department: "ENT – Laryngology",
    angle: 324,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Nose",
    image: "/anatomy/human-ent.jpg",
    department: "ENT – Laryngology",
    angle: 288,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Chest",
    image: "/anatomy/human-chest.jpg",
    department: "Pulmonary Medicine",
    angle: 252,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Heart",
    image: "/anatomy/human-heart.jpg",
    department: "Cardiology",
    angle: 216,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Liver",
    image: "/anatomy/human-liver.jpg",
    department: "Gastroenterology",
    angle: 180,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Arm",
    image: "/anatomy/human-hands.jpg",
    department: "Orthopedics",
    angle: 108,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Elbow",
    image: "/anatomy/human-hands.jpg",
    department: "Orthopedics",
    angle: 144,
    category: "upper",
    id: 0,
    departments: []
  },
  {
    name: "Vocal Cord",
    image: "/anatomy/human-vocal-cord.jpg",
    department: "ENT & Voice Care",
    angle: 72,
    category: "upper",
    id: 0,
    departments: []
  },

  // ================= LOWER BODY =================

  {
    name: "Kidney",
    image: "/anatomy/human-kidney.jpg",
    department: "Nephrology & Urology",
    angle: 36,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Stomach",
    image: "/anatomy/human-stomach.jpg",
    department: "Gastroenterology",
    angle: 0,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Lower Back",
    image: "/anatomy/human-spine.jpg",
    department: "Spine Surgery & Physiotherapy",
    angle: 324,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Reproductive System",
    image: "/anatomy/human-gynecology.jpg",
    department: "Gynecology & Urology",
    angle: 72,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Hip",
    image: "/anatomy/human-hip.jpg",
    department: "Orthopedics",
    angle: 288,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Thigh",
    image: "/anatomy/thigh-service-icon.png",
    department: "Orthopedics",
    angle: 252,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Knee",
    image: "/anatomy/human-knee.jpg",
    department: "Orthopedics",
    angle: 108,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Varicose Vein",
    image: "/anatomy/human-leg.jpg",
    department: "Vascular Surgery",
    angle: 216,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Ankle",
    image: "/anatomy/human-leg.jpg",
    department: "Orthopedics",
    angle: 144,
    category: "lower",
    id: 0,
    departments: []
  },
  {
    name: "Foot",
    image: "/anatomy/human-leg.jpg",
    department: "Orthopedics",
    angle: 180,
    category: "lower",
    id: 0,
    departments: []
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

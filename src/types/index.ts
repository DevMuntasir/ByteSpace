export interface NavLink {
    active?: boolean;
    href: string;
    label: string;
}
export interface FooterLink {
    href: string;
    label: string;
}
export interface FooterColumn {
    links: FooterLink[];
    title: string;
}
export interface Partner {
    height: number;
    logo: string;
    name: string;
    width: number;
}
export interface Category {
    icon: string;
    id: string;
    name: string;
}
export interface Course {
    author: string;
    comments: number;
    duration: string;
    enrolledAvatars: string[];
    enrolledCount: string;
    id: string;
    lessons: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    price: number;
    rating: number;
    thumbnail: string;
    title: string;
}
export interface Stat {
    label: string;
    value: string;
}
export interface Testimonial {
    avatar: string;
    id: string;
    name: string;
    quote: string;
    role: string;
}
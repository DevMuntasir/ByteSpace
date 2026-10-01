import type {
    FooterColumn,
    NavLink,
} from "../types";



export const NAV_LINKS: NavLink[] = [
    { active: true, href: "#", label: "Home" },
    { href: "#courses", label: "Courses" },
    { href: "#creators", label: "Creators" },
];
export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        links: [
            { href: "#", label: "Featured Courses" },
            { href: "#", label: "Featured Categories" },
            { href: "#", label: "Business" },
            { href: "#", label: "IT" },
            { href: "#", label: "Design" },
        ],
        title: "Browse",
    },
    {
        links: [
            { href: "#", label: "Development" },
            { href: "#", label: "Marketing" },
            { href: "#", label: "Photography" },
            { href: "#", label: "Finance" },
            { href: "#", label: "Sport" },
        ],
        title: "",
    },
    {
        links: [
            { href: "#", label: "Become a Creator" },
            { href: "#", label: "Affiliate Program" },
            { href: "#", label: "Contact" },
            { href: "#", label: "Help" },
            { href: "#", label: "About" },
        ],
        title: "Platform",
    },
];
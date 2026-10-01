import type {
    FooterColumn,
    NavLink,
    Partner,
} from "../types";

const A = "/assets";

export const NAV_LINKS: NavLink[] = [
    { active: true, href: "#", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/creators", label: "Creators" },
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

export const PARTNERS: Partner[] = [
    { height: 41, logo: `${A}/partner-1.svg`, name: "Partner 1", width: 167 },
    { height: 41, logo: `${A}/partner-2.svg`, name: "Partner 2", width: 168 },
    { height: 41, logo: `${A}/partner-3.svg`, name: "Partner 3", width: 170 },
    { height: 41, logo: `${A}/partner-4.svg`, name: "Partner 4", width: 170 },
    { height: 42, logo: `${A}/partner-5.svg`, name: "Partner 5", width: 169 },
];
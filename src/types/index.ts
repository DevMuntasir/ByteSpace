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
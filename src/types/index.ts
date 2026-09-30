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
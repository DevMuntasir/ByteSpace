import type {
  Category,
  Course,
  FooterColumn,
  NavLink,
  Partner,
  Stat,
  Testimonial,
} from "../types";

const A = "/assets";
const SHARED_AVATARS = [
  `${A}/a-1.png`,
  `${A}/a-2.png`,
  `${A}/a-3.png`,
  `${A}/a-4.png`,
];
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

export const FEATURED_CATEGORIES: Category[] = [
  { icon: `${A}/design.svg`, id: "1", name: "Design" },
  { icon: `${A}/code.svg`, id: "2", name: "Development" },
  { icon: `${A}/laptop.svg`, id: "3", name: "IT & Software" },
  { icon: `${A}/network.svg`, id: "4", name: "Business" },
  { icon: `${A}/profile.svg`, id: "5", name: "Marketing" },
  { icon: `${A}/net.svg`, id: "6", name: "Photography" },
];
export const EXPLORE_CATEGORIES: Category[] = FEATURED_CATEGORIES;

export const STATS: Stat[] = [
  { label: "Students", value: "12K" },
  { label: "Courses", value: "70+" },
  { label: "Creators", value: "16" },
];
export const COURSE_TABS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

export const COURSE_TAGS_ROW2 = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

export const COURSE_TAGS_ROW3 = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const COURSES: Course[] = [
  {
    author: "purepearl studio",
    comments: 59,
    duration: "2 hours 16 mins",
    enrolledAvatars: SHARED_AVATARS,
    enrolledCount: "26+",
    id: "1",
    lessons: 17,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    thumbnail: `${A}/course-1.png`,
    title: "Learn Figma from Basic",
  },
  {
    author: "purepearl studio",
    comments: 59,
    duration: "2 hours 16 mins",
    enrolledAvatars: SHARED_AVATARS,
    enrolledCount: "26+",
    id: "2",
    lessons: 17,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    thumbnail: `${A}/course-2.png`,
    title: "Build Digital Asset",
  },
  {
    author: "purepearl studio",
    comments: 59,
    duration: "2 hours 16 mins",
    enrolledAvatars: SHARED_AVATARS,
    enrolledCount: "26+",
    id: "3",
    lessons: 17,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    thumbnail: `${A}/course-3.png`,
    title: "the Power of Big Data",
  },
  {
    author: "purepearl studio",
    comments: 59,
    duration: "2 hours 16 mins",
    enrolledAvatars: SHARED_AVATARS,
    enrolledCount: "26+",
    id: "4",
    lessons: 17,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    thumbnail: `${A}/course-4.png`,
    title: "Balancing Productivity and Self-Care",
  },
  {
    author: "purepearl studio",
    comments: 59,
    duration: "2 hours 16 mins",
    enrolledAvatars: SHARED_AVATARS,
    enrolledCount: "26+",
    id: "5",
    lessons: 17,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    thumbnail: `${A}/course-5.png`,
    title: "Mastering Money Management",
  },
  {
    author: "purepearl studio",
    comments: 59,
    duration: "2 hours 16 mins",
    enrolledAvatars: SHARED_AVATARS,
    enrolledCount: "26+",
    id: "6",
    lessons: 17,
    level: "Beginner",
    price: 25,
    rating: 4.5,
    thumbnail: `${A}/course-6.png`,
    title: "From Idea to Startup Success",
  },
];
export const TESTIMONIALS: Testimonial[] = [
  {
    avatar: `${A}/t-1.png`,
    id: "1",
    name: "Sarah M.",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    role: "Enthusiastic Learner",
  },
  {
    avatar: `${A}/t-2.png`,
    id: "2",
    name: "James L.",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    role: "Lifelong Learner",
  },
  {
    avatar: `${A}/t-3.png`,
    id: "3",
    name: "Alex B.",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    role: "Inspired Creator",
  },
];

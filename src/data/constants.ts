import ecommerceImg from '../assets/1.png';
import taskManagerImg from '../assets/2.png';
import ironforgeImg from '../assets/3.png';
import vintageImg from '../assets/4.png';

export interface NavLink {
  name: string;
  href: string;
  page: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#', page: 'home' },
  { name: 'About', href: '#about', page: 'home' },
  { name: 'Skills', href: '#skills', page: 'home' },
  { name: 'Projects', href: '#projects', page: 'home' },
  { name: 'Education', href: '#education', page: 'home' },
  { name: 'Contact', href: '#contact', page: 'home' },
];

export const PROJECTS = [
  {
    title: "Mantra Clothing",
    description: "A modern, style-forward fashion store UI crafted in React built to make every browsing moment feel effortless and immersive. Navigate through a polished Home, Shop, Product Details, and Cart — all wrapped in a clean, brand-driven aesthetic.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    img: ecommerceImg,
    live: "https://mantra-clothing.vercel.app/",
    github: "#"
  },
  {
    title: "Sizzle BBQ",
    description: "A bold, appetite-driven restaurant UI built with React and Framer Motion. where every scroll feels alive with smooth animations and fiery energy. Discover a beautifully structured Home, Menu, About, and Contact experience that captures the true essence of a premium BBQ brand. Complete with a real-time scrolling ticker and a one-tap WhatsApp order button for instant cravings.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "jQuery"],
    img: taskManagerImg,
    live: "https://sizzle-bbq.vercel.app/",
    github: "#"
  },
  {
    title: "IronForge Fitness",
    description: "A sleek dark-themed fitness e-commerce UI built with React & TypeScript, designed to deliver a premium gym brand experience. Explore a fully structured storefront with Home, Shop, and Product Detail pages complemented by a smooth cart drawer.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    img: ironforgeImg,
    live: "https://gym-website-rho-two.vercel.app/",
    github: "#"
  },
  {
    title: "Vintage StreetWear",
    description: "A sophisticated, dark-luxe streetwear store UI built with React. TypeScript and Framer Motion — where fashion meets fluid motion. Every page transition is cinematic drawing users deeper into a curated world of premium street culture. Browse categories explore product details, and experience a UI so refined it speaks before the products do.",
    tech: ["JavaScript", "Chart.js", "Bootstrap", "PHP"],
    img: vintageImg,
    live: "https://vintage-sepia.vercel.app/",
    github: "#"
  }
];

export const SKILLS = {
  technical: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "Angular (Basics)", "Material UI", "Bootstrap", "jQuery", "PHP", "Laravel", "ASP.NET Core MVC", "RESTful APIs", "C#", "Dart (Basics)", "Flutter (Basics)"],
  database: ["MySQL", "SQL Server", "MongoDB (Basics)"],
  tools: ["MS Office", "MS Word", "MS Excel", "VS Code", "Git", "GitHub", "Microsoft Azure (Basics)"],
  soft: ["Active", "Punctual", "Good Learner", "Team Worker", "Hard Working", "Motivated", "Eager to learn"]
};

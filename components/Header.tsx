"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [{href:"/", label:"Home"},{href:"/portfolio", label:"Portfolio"},{href:"/about", label:"About"},{href:"/gallery", label:"Gallery"}];
export default function Header(){
 const pathname = usePathname()?.replace(/\/$/, "") || "/";
 return <header className="header"><div className="header-inner"><Link href="/" className="brand" aria-label="John David, home"><span className="brand-mark">jd.</span><span>JOHN DAVID<span className="brand-sub">PERSONAL PORTFOLIO</span></span></Link><nav aria-label="Main navigation">{links.map(({href,label})=><Link key={href} href={href} className={pathname===href ? "nav-link active":"nav-link"} aria-current={pathname===href?"page":undefined}>{label}</Link>)}</nav></div></header>
}
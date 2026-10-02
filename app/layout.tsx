import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import "./globals.css";
export const metadata: Metadata={title:{default:"John David | Personal Portfolio",template:"%s | John David"},description:"John David's student portfolio: web projects, learning journey, and interface explorations.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><footer><div className="footer-inner"><span>© 2026 John David Monticalvo</span><span>Built with curiosity. One step at a time.</span><Link href="/about">Get to know me</Link></div></footer></body></html>}
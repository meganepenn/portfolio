import type { Metadata } from 'next';
import Navigation from '@/components/portfolio/navigation';
import './globals.css';
export const metadata: Metadata = {title:'Megan Penn — Design & Engineering',description:'Megan Penn’s portfolio. Thoughtful digital experiences, web development, and data visualization at the intersection of creativity and code.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navigation/>{children}<footer className="wrap"><a className="brand" href="/">Megan Penn</a><a className="text-link" href="/contact">Let’s connect</a></footer></body></html>}

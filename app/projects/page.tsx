import type {Metadata} from 'next';
import ProjectGrid from '@/components/portfolio/project-grid';
export const metadata:Metadata={title:'Projects — Megan Penn'};
export default function ProjectsPage(){return <main id="main" className="wrap interior-page"><div className="page-intro"><p className="eyebrow">Design · Development · Data</p><h1>A few things<br/><em>I’ve built.</em></h1><p>From playful games to thoughtful web experiences, a closer look at the projects behind my work.</p></div><ProjectGrid layout="stack"/></main>}

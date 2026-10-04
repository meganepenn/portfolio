'use client';
import { BookOpen, Coffee, MapPin, Plane, CalendarDays, ChartColumn } from 'lucide-react';
import type { Project } from '@/lib/projects';
export const covers: Record<string, {first:string;second:string;caption:string;icon:typeof BookOpen}> = {
 storybook:{first:'A new',second:'chapter.',caption:'A student perspective on study abroad.',icon:Plane},
 events:{first:'Find your',second:'people.',caption:'Events, interests, and community.',icon:CalendarDays},
 stem:{first:'Women in',second:'STEM.',caption:'Representation, told through data.',icon:ChartColumn},
 'junimos-guide':{first:'Junimo’s',second:'Guide',caption:'A little progress, every day.',icon:BookOpen},
 'deja-brew':{first:'Deja',second:'Brew',caption:'A day at the café.',icon:Coffee},
 'campus-navigation':{first:'Find your',second:'way.',caption:'Campus navigation · 48-hour build',icon:MapPin}
};
function ProjectCard({project,onOpen}:{project:Project,onOpen:()=>void}) {
 const cover=covers[project.id];const Icon=cover.icon;
 return <article className="project-card"><button className={'image-button typographic-preview '+project.id} onClick={onOpen} aria-label={`Read about ${project.title}`}>
 <div className="project-cover"><Icon size={36} strokeWidth={1.4} aria-hidden="true"/><span className="cover-title">{cover.first}<br/><em>{cover.second}</em></span><span className="cover-caption">{cover.caption}</span></div>
 <span className={'tag '+project.id}>{project.category}</span></button><div className="card-body"><h3>{project.title}</h3><p>{project.description}</p><div className="card-bottom"><button className="text-link" onClick={onOpen}>View Project Details</button>{project.year&&<span className="year">{project.year}</span>}</div></div></article>;
}

export default ProjectCard;

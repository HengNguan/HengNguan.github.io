import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <FolderGit2 className="text-primary" size={28} />
          <h2 className="text-3xl font-bold text-slate-700">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-secondary rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-700 flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-white leading-tight pr-2">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    {project.repo && (
                      <a 
                        href={project.repo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="View Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                {project.subtitle && (
                    <div className="text-xs text-slate-500 font-medium text-primary mb-3 uppercase tracking-wide">{project.subtitle}</div>
                )}
                
                <p className="text-slate-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-700">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-slate-700 text-slate-100 text-xs rounded font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700 text-slate-100 text-xs rounded font-medium">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
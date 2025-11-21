import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Work Experience Column */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={28} />
              <h2 className="text-3xl font-bold text-slate-700">Experience</h2>
            </div>

            <div className="space-y-8">
              {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-700">
                  <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary border-2 border-secondary ring-2 ring-primary/20"></div>
                  
                  <h3 className="text-xl font-bold text-slate-700">{job.role}</h3>
                  <div className="text-primary font-semibold mb-1">{job.company}</div>
                  <div className="flex items-center text-slate-800 mb-4">
                    <Calendar size={14} className="mr-1 text-slate-800" />
                    {job.period}
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-300 leading-relaxed text-slate-700 list-disc list-outside ml-4">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {job.techStack && (
                    <div className="flex flex-wrap gap-2">
                      {job.techStack.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-slate-700 text-slate-100 text-xs rounded font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary" size={28} />
                <h2 className="text-3xl font-bold text-slate-700">Education</h2>
              </div>

              <div className="space-y-8">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="bg-secondary p-6 rounded-xl border border-slate-700">
                    <h3 className="font-bold text-white mb-1">{edu.degree}</h3>
                    <div className="text-primary text-sm font-medium mb-2 text-slate-500">{edu.institution}</div>
                    <div className="flex justify-between items-center text-xs text-slate-300 mb-3">
                      <span>{edu.period}</span>
                      {edu.cgpa && <span className="font-semibold bg-secondary text-white px-2 py-0.5 rounded border border-slate-700">CGPA: {edu.cgpa}</span>}
                    </div>
                    {edu.details && (
                      <ul className="space-y-1">
                        {edu.details.map((detail, i) => (
                          <li key={i} className="text-slate-300 text-xs">• {detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
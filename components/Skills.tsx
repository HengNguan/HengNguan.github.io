import React from 'react';
import { SKILLS, AWARDS } from '../constants';
import { Cpu, Trophy } from 'lucide-react';

export const SkillsAndAwards: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Skills */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Cpu className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-slate-700">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((category, index) => (
              <div key={index} className="bg-secondary rounded-xl p-6 border border-slate-700">
                <h3 className="font-bold text-lg text-white mb-4 border-b border-slate-700 pb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-slate-700 border border-slate-700 rounded-lg text-sm text-slate-100 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div id="awards">
          <div className="flex items-center gap-3 mb-10">
            <Trophy className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-slate-700">Honors & Awards</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {AWARDS.map((award, index) => (
              <div key={index} className="flex items-start p-4 rounded-lg border border-slate-700 bg-secondary/60 hover:border-primary/30 hover:bg-secondary/70 transition-colors">
                <div className="mt-1 mr-4 text-yellow-400">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">{award.title}</h4>
                  <div className="text-sm text-slate-300">{award.organization}</div>
                  <div className="text-xs text-slate-400 mt-1">{award.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
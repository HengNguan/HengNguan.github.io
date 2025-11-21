import React from 'react';
import { PERSONAL_DETAILS, SOCIAL_LINKS } from '../constants';
import { Linkedin, Github, Mail, FileText, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'GitHub': return <Github size={20} />;
      case 'Email': return <Mail size={20} />;
      default: return <FileText size={20} />;
    }
  };

  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Avatar / Image Placeholder */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-primary/20">
              <img 
                src={PERSONAL_DETAILS.profileImage} 
                alt={PERSONAL_DETAILS.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg text-primary">
                <MapPin size={18} />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              {PERSONAL_DETAILS.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">
              {PERSONAL_DETAILS.role}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-2xl mx-auto md:mx-0">
              {PERSONAL_DETAILS.about}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow"
                >
                  {getIcon(link.platform)}
                  <span className="font-medium">{link.platform}</span>
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-slate-500 text-sm">
               <span>{PERSONAL_DETAILS.location}</span>
               <span className="hidden md:inline">•</span>
               <span>{PERSONAL_DETAILS.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
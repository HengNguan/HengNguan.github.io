import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{PERSONAL_DETAILS.name}</h2>
        <p className="mb-8">{PERSONAL_DETAILS.role}</p>
        
        <div className="border-t border-slate-800 pt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} Ting Heng Nguan. All rights reserved.</p>
          <p className="mt-2">
            Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
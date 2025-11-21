import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SkillsAndAwards } from './components/Skills';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-slate-800 font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <SkillsAndAwards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
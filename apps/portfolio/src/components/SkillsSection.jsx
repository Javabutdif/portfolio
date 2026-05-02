'use client';

import { motion } from 'framer-motion';
import { 
  Atom, FileCode, HardDrives, Database, Browser, 
  Cloud, TerminalWindow, DeviceMobile
} from '@phosphor-icons/react';

const skills = [
  { category: 'Frontend', items: [
    { name: 'React', icon: <Atom /> },
    { name: 'JavaScript', icon: <FileCode /> },
    { name: 'TypeScript', icon: <FileCode /> },
    { name: 'HTML / CSS', icon: <Browser /> },
    { name: 'Tailwind', icon: <DeviceMobile /> },
  ]},
  { category: 'Backend', items: [
    { name: 'Node.js', icon: <HardDrives /> },
    { name: 'Express', icon: <HardDrives /> },
    { name: 'Java', icon: <TerminalWindow /> },
    { name: 'C# / .NET', icon: <TerminalWindow /> },
    { name: 'MongoDB', icon: <Database /> },
    { name: 'MySQL', icon: <Database /> },
  ]},
  { category: 'DevOps & Tools', items: [
    { name: 'Git', icon: <TerminalWindow /> },
    { name: 'AWS S3', icon: <Cloud /> },
    { name: 'Firebase', icon: <Cloud /> },
    { name: 'Vercel', icon: <Cloud /> },
  ]},
  { category: 'Networking & IT', items: [
    { name: 'CCNA Routing & Switching', icon: <HardDrives /> },
    { name: 'CCNA Intro to Networks', icon: <HardDrives /> },
    { name: 'Network Switches', icon: <HardDrives /> },
    { name: 'IT Support & Hardware', icon: <TerminalWindow /> },
  ]}
];

export default function SkillsSection() {
  return (
    <section className="py-24 border-b border-border-subtle" id="skills">
      
      <div className="mb-16 max-w-2xl">
        <span className="text-eyebrow">Capabilities</span>
        <h2 className="heading-section">Technical Stack</h2>
        <p className="text-body">
          A focused toolkit for building production-grade web applications. Emphasizing 
          modern React ecosystems on the frontend and robust data pipelines on the backend.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {skills.map((group, groupIdx) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            className="structured-container p-6 flex flex-col"
          >
            <h3 className="heading-card text-lg mb-6 pb-4 border-b border-border-subtle">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-4">
              {group.items.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 text-body-sm group cursor-default">
                  <span className="text-slate-500 group-hover:text-white transition-colors">
                    {skill.icon}
                  </span>
                  <span className="group-hover:text-slate-200 transition-colors">{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}

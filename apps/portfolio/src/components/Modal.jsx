'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from '@phosphor-icons/react';

export default function Modal({ project, onClose }) {
  if (!project) return null;

  const techList = Array.isArray(project.tech) ? project.tech : project.tech.split(', ');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop - pure black with slight opacity */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Card - Linear style sheet */}
        <motion.div 
          layoutId={`project-container-${project.id}`}
          className="relative w-full max-w-3xl bg-surface border border-border-strong rounded-xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-base/50">
            <span className="text-meta">Project Details</span>
            <button 
              onClick={onClose}
              className="p-2 -mr-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 md:p-10">
            <motion.h3 
              layoutId={`project-title-${project.id}`}
              className="font-display text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight"
            >
              {project.title}
            </motion.h3>

            {project.subtitle && (
              <motion.p 
                layoutId={`project-subtitle-${project.id}`}
                className="text-body text-accent-strong mb-8"
              >
                {project.subtitle}
              </motion.p>
            )}

            <div className="flex flex-col md:flex-row gap-10">
              {/* Left Column: Description */}
              <div className="flex-1">
                <p className="text-body mb-8">
                  {project.description}
                </p>
                
                {project.demoLink !== '#' ? (
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn-primary">
                    View Live Site
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 rounded-md bg-white/5 text-slate-400 text-sm font-medium border border-border-subtle">
                    Internal / Offline
                  </span>
                )}
              </div>

              {/* Right Column: Metadata */}
              <div className="w-full md:w-56 shrink-0 flex flex-col gap-6">
                
                {project.year && (
                  <div>
                    <span className="text-eyebrow mb-1">Year</span>
                    <span className="text-body-sm">{project.year}</span>
                  </div>
                )}
                
                {project.role && (
                  <div>
                    <span className="text-eyebrow mb-1">Role</span>
                    <span className="text-body-sm">{project.role}</span>
                  </div>
                )}

                <div>
                  <span className="text-eyebrow mb-2">Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {techList.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-border-subtle text-meta">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

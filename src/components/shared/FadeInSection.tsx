import React from 'react';
import { motion } from 'motion/react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
}

// Scroll-triggered fade-in wrapper — per the Company Profile / Sustainability
// Strategy brief ("各區塊捲動到畫面時淡入"). The homepage itself has no
// identical scroll-fade effect to literally copy (its only comparable motion
// is Hero's mount-time fade/slide, see Hero.tsx), so this matches that same
// duration/easing instead of inventing a new animation language.
export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

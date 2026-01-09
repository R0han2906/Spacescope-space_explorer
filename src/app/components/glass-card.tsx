import React from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className = "", glow = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className={`
        relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl
        ${glow ? "shadow-[0_0_30px_rgba(99,102,241,0.15)]" : ""}
        ${onClick ? "cursor-pointer hover:bg-white/8 transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

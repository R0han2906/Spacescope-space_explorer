import React from "react";
import { motion } from "motion/react";

interface XPRingProps {
  level: number;
  xp: number;
  maxXp: number;
  size?: "sm" | "md" | "lg";
}

export function XPRing({ level, xp, maxXp, size = "md" }: XPRingProps) {
  const percentage = (xp / maxXp) * 100;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(99, 102, 241, 0.1)"
          strokeWidth="6"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#xpGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
          }}
        />
        <defs>
          <linearGradient id="xpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${textSizeClasses[size]} font-bold text-white`}>
          {level}
        </span>
        <span className="text-xs text-white/60">Level</span>
      </div>
    </div>
  );
}

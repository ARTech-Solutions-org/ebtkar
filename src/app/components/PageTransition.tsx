import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Respect prefers-reduced-motion: skip the JS-driven animation entirely
  if (shouldReduceMotion) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: [0.165, 0.84, 0.44, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeInOnScroll({
  children,
  delay = 0,
  direction = "up",
  distance = 35,
  duration = 0.55,
  className = "",
  once = true,
}: FadeInOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // ease-out-cubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

export interface MotionButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  scaleHover?: number;
  scaleTap?: number;
}

export function MotionButton({
  children,
  scaleHover = 1.03,
  scaleTap = 0.97,
  className = "",
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: scaleHover }}
      whileTap={{ scale: scaleTap }}
      transition={{ type: "spring", stiffness: 450, damping: 20 }}
      className={`cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export interface MotionCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  liftAmount?: number;
}

export function MotionCard({
  children,
  liftAmount = -6,
  className = "",
  ...props
}: MotionCardProps) {
  return (
    <motion.div
      whileHover={{ y: liftAmount }}
      transition={{ duration: 0.22, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

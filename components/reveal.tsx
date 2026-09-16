"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;

  direction?: "up" | "down" | "left" | "right" | "none";

  delay?: number;
  duration?: number;
  distance?: number;

  once?: boolean;
  amount?: number;
};

export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 30,
  once = true,
  amount = 0.15,
}: RevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };

      case "down":
        return { opacity: 0, y: -distance };

      case "left":
        return { opacity: 0, x: distance };

      case "right":
        return { opacity: 0, x: -distance };

      case "none":
        return { opacity: 0 };

      default:
        return { opacity: 0, y: distance };
    }
  };

  const variants: Variants = {
    hidden: getInitial(),

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
    >
      {children}
    </motion.div>
  );
}
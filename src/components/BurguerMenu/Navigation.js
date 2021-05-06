import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <motion.li
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      First
    </motion.li>
    <motion.li
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      First
    </motion.li>
    <motion.li
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      First
    </motion.li>
  </motion.ul>
);
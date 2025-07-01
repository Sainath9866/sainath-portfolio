"use client";

import SpotlightPreview from "./components/spotlight/page";
import FeaturedProjects from "./components/featured-courses/page";
import TechStack from "./components/tech-stack/page";
import ContactMe from "./components/contact-me/page";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      >
        <SpotlightPreview />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ delay: 0.12, duration: 0.5, ease: "easeOut" }}
      >
        <FeaturedProjects />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ delay: 0.24, duration: 0.5, ease: "easeOut" }}
      >
        <TechStack />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ delay: 0.36, duration: 0.5, ease: "easeOut" }}
      >
        <ContactMe />
      </motion.div>
    </div>
  );
}

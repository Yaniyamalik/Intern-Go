"use client";

import { motion } from "framer-motion"; // ✅ Fix: Correct import
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function Herosection() {
  return (
    <HeroHighlight className="h-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-white max-w-4xl leading-snug text-center mx-auto px-4  mt-35 "
      >
        Supercharge Your Internship Hunt with{" "}
        <Highlight className="text-black dark:text-white">Intern-Go</Highlight>
      </motion.h1>

      <div className="mt-5 px-6 ">
        <h3 className="text-xl md:text-2xl text-center text-white/70 max-w-3xl mx-auto">
          From resume parsing to job matching and auto-application —
          <br className="hidden md:block" />
          InternGo is your smart assistant for career success.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-6 rounded-xl shadow-lg text-white text-center hover:bg-white/20 transition duration-300"
          >
            🎯 <strong>Smart Resume-to-Job Matching</strong>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-6 rounded-xl shadow-lg text-white text-center hover:bg-white/20 transition duration-300"
          >
            ⚡ <strong>One-Click Auto Applications</strong>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-6 rounded-xl shadow-lg text-white text-center hover:bg-white/20 transition duration-300"
          >
            📈 <strong>Track & Improve Your Journey</strong>
          </motion.div>
        </div>
      </div>
    </HeroHighlight>
  );
}


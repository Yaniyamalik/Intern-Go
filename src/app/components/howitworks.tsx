
"use client"
import React from "react";
import { motion } from "framer-motion";
import { MapPin, FileText, Bot, Send, BarChart4, Lightbulb } from "lucide-react";

const steps = [
  {
    title: "Upload Resume",
    icon: <FileText className="w-6 h-6 text-white" />,
    description: "User uploads their resume and skills to Intern-Go.",
  },
  {
    title: "AI Job Matching",
    icon: <Bot className="w-6 h-6 text-white" />,
    description: "The AI scans job platforms and finds best-fit opportunities.",
  },
  {
    title: "Auto Apply",
    icon: <Send className="w-6 h-6 text-white" />,
    description: "It creates cover letters, customizes resumes, and applies.",
  },
  {
    title: "Track Progress",
    icon: <BarChart4 className="w-6 h-6 text-white" />,
    description: "Track application statuses and follow-ups easily.",
  },
  
];

const Journey = () => {
  return (
    <section className="relative w-full  mx-auto px-4 py-25 bg-neutral-900" id="how-it-works">
      <h2 className="text-4xl font-bold text-center mb-12">How Intern-Go Works</h2>

      <div className="relative">
        {/* SVG Path */}
        <svg className="absolute top-12 left-0 w-full h-24 " viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path
            d="M 50 50 Q 200 0, 350 50 T 650 50 T 950 50"
            stroke="#664c28"
            fill="transparent"
            strokeWidth="4"
          />
        </svg>

        {/* Steps */}
        <div className="flex justify-between items-center relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center w-1/5 min-w-1/10  hover:transform hover:scale-110 transition-transform duration-300 cursor-pointer "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="bg-blue-600 p-4 rounded-full shadow-lg mb-3 ">
                {step.icon}
              </div>
              <h4 className="text-lg font-semibold mb-1 text-white ">{step.title}</h4>
              <p className="text-sm text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, GraduationCap, Languages } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("education")

  const tabs = [
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-800 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold">Bennett University</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">August 2022 - August 2026</p>
            <p className="mt-2">Bachelor Of Technology (Computer Science) | CGPA: 9.04</p>
            <p className="text-sm">Greater Noida, India</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold">Delhi Public School, Rohini</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">March 2020 - July 2022</p>
            <p className="mt-2">Science | 10th: 82% — 12th: 85%</p>
            <p className="text-sm">Delhi, India</p>
          </div>
        </div>
      ),
    },
    {
      id: "skills",
      label: "Skills",
      icon: <Code2 className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "C++", "HTML", "CSS", "JavaScript", "TypeScript", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#FF5252] text-white font-medium rounded-md border-2 border-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "PyTorch",
                "Tensorflow",
                "FastAPI",
                "Numpy",
                "Pandas",
                "Matplotlib",
                "Flask",
                "NextJS",
                "Linux",
                "Docker",
                "StreamLit",
                "TailwindCSS",
                "Git/Github",
                "MongoDB",
                "GenAI Tools",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white dark:bg-gray-800 text-black dark:text-white font-medium rounded-md border-2 border-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "roles",
      label: "Roles",
      icon: <Languages className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-white dark:bg-gray-800 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold">Vice-President</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Artificial Intelligence Society (AI club of BU)</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold">AI Expert</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">GDSC BU (Google Developer Student Club)</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold">Tech Head</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">ICosmic'22</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            ABOUT <span className="text-[#FF5252]">ME</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 flex items-center gap-2 font-bold rounded-md border-2 border-black transition-all ${
                  activeTab === tab.id
                    ? "bg-[#FF5252] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border-2 border-black"
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


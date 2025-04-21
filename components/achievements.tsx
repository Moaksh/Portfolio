"use client"

import { motion } from "framer-motion"
import { Award, BadgeIcon as Certificate } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Fork-it Hackathon ",
      description: "2nd Position",
      organization: "IIIT Delhi",
      icon: <Award className="h-6 w-6 text-[#FF5252]" />,
    },
    {
      title: "Engineering Project Showcase 2023",
      description: "3rd Position",
      organization: "Bennett University",
      icon: <Award className="h-6 w-6 text-[#FF5252]" />,
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      description: "Certification",
      organization: "DeepLearning.AI",
      icon: <Certificate className="h-6 w-6 text-[#FF5252]" />,
    },
    {
      title: "Algorithmic Toolbox",
      description: "Certification",
      organization: "UC San Diego",
      icon: <Certificate className="h-6 w-6 text-[#FF5252]" />,
    },
    {
      title: "Fundamentals of Network Communication",
      description: "Certification",
      organization: "University of Colorado",
      icon: <Certificate className="h-6 w-6 text-[#FF5252]" />,
    },
     {
      title: "Introduction to Computers and Operating Systems and Security",
      description: "Certification",
      organization: "Microsoft",
      icon: <Certificate className="h-6 w-6 text-[#FF5252]" />,
    },
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            ACHIEVEMENTS & <span className="text-[#FF5252]">CERTIFICATIONS</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-transparent p-6 rounded-lg border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-transparent rounded-lg">{achievement.icon}</div>
                <div>
                  <h3 className="text-lg font-bold">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{achievement.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


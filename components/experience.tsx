"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      title: "Deep Learning Intern",
      company: "Thothica",
      period: "April 2024 - Dec 2024",
      location: "Remote",
      responsibilities: [
        "Developed and implemented an evaluation method to assess the performance of Tesseract and Surya OCR engines in processing complex Urdu and Hindi scripts. Optimized Surya OCR, resulting in a 35% improvement in Hindi recognition accuracy.",
        "Leveraged OpenAI API to rapidly develop a compelling proof of concept for a client within 24 hours, seamlessly integrating it into a website and hosting it on an AWS EC2 instance, demonstrating innovative solutions and delivering immediate value.",
        "Automated web scraping for Indian literature using Selenium, boosting efficiency by over 70%.",
        "Conducted in-depth research on Retrieval-Augmented Reasoning, exploring innovative methodologies to enhance information retrieval and reasoning capabilities in AI systems.",
      ],
      technologies: ["Python", "PyTorch", "Tesseract", "Selenium", "GenAI", "LLM"],
    },
    {
      title: "Academic Intern",
      company: "National University Singapore",
      period: "June 2023 - July 2023",
      location: "On-Site",
      responsibilities: [
        "Collaborated with and managed a team of five students from diverse Indian universities to develop a Pose Detector within one month.",
        "Evaluated and compared various computer vision frameworks, including MediaPipe and YOLO V7, and selected YOLO V7 for its superior performance and accuracy.",
        "Leveraged the YOLO V7 object detection algorithm to train a model capable of real-time pose estimation.",
        "Explored the potential of custom keypoint detection using Detectron; however, encountered time constraints that prevented full implementation of this approach.",
      ],
      technologies: ["Python", "Pytorch", "YOLOv7", "ResNet", "InceptionV3", "Detectron", "Streamlit", "GenAI"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            WORK <span className="text-[#FF5252]">EXPERIENCE</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full text-left p-4 border-2 border-black rounded-lg transition-all ${
                    activeExperience === index
                      ? "bg-[#FF5252] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                  <p className="text-sm">{exp.title}</p>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{experiences[activeExperience].title}</h3>
              <p className="text-[#FF5252] font-bold">{experiences[activeExperience].company}</p>
              <div className="flex flex-wrap justify-between mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">{experiences[activeExperience].period}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{experiences[activeExperience].location}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-bold mb-2 text-lg">Responsibilities:</h4>
              <ul className="space-y-2">
                {experiences[activeExperience].responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 bg-[#FF5252] rounded-full mt-2 mr-2"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-lg">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {experiences[activeExperience].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-md border-2 border-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


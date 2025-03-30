"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "On1y One",
      period: "Jan 2024 - March 2024",
      description: [
        "Developed a custom Generative Adversarial Network (GAN) model using a convolutional neural network (CNN) as the generator and a CNN-based discriminator in PyTorch.",
        "Trained the GAN model on a custom dataset of NFT style images sourced from HuggingFace, enabling the generation of unique and diverse NFT-style images through unsupervised learning. Developed an API using FastAPI for easy access and integration.",
        "Designed and directed the website's front-end to ensure seamless functionality across, facilitating efficient production. Integrated the image generator into the website for enhanced user experience.",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "numpy",
        "Flask",
        "HTML",
        "TailwindCSS",
      ],
      github: "https://github.com/satvikbatra/On1yOne",
      color: "#FF5252",
    },
    {
      title: "Lip-sync",
      period: "Sept 2023 - Dec 2023",
      description: [
        "Restructured a deep learning model to transcribe text from videos of individuals speaking, leveraging lip movements for improved accuracy.",
        "Preprocessed video data using dlib and OpenCV to extract essential facial information necessary for the model.",
        "Defined a neural network architecture that combines spatial pooling layers to capture spatial lip movements with LSTM layers to model temporal sequences.",
      ],
      technologies: ["Python", "TensorFlow", "StreamLit"],
      github: "https://github.com/Moaksh/LipSync",
      color: "#3B82F6",
    },
    {
      title: "BennQA",
      period: "Nov 2024 - Nov 2024",
      description: [
        "Developed a multi-knowledge chatbot utilizing Langchain to streamline access to university policies and protocols, enhancing user experience for students and staff.",
        "	Implemented advanced natural language processing techniques to facilitate user queries, resulting in a significant reduction in response time for policy-related inquiries.",
        "Designed and executed a user-friendly interface that enables seamless interaction with the chatbot, improving overall engagement and satisfaction among users.",
      ],
      technologies: ["Flask", "TailwindCSS", "VectorDB","LLM","LangChain"],
      github: "https://github.com/Moaksh/BennQA/",
      color: "#4CAF50",
    },
    {
      title: "Pose-Detector",
      period: "Jun 2023 - July 2023",
      description: [
        "Evaluated and compared various computer vision frameworks, including MediaPipe and YOLO V7, and selected YOLO V7 for its superior performance and accuracy.",
        "Explored the potential of custom keypoint detection using Detectron.",
        "Leveraged the YOLO V7 object detection algorithm to train a model capable of real-time pose estimation like Sholder press, Chest press and more",
      ],
      technologies: [
        "Python",
        "YOLO V7",
        "Streamlit",
        "MediaPipe",

      ],
      github: "https://github.com/Moaksh/Pose-detector",
      color: "#FEDA5B",
    },
  
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            MY <span className="text-[#FF5252]">PROJECTS</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
              className="relative bg-white dark:bg-[#121212] rounded-lg border-2 border-black dark:border-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              style={{
                borderColor: hoveredProject === index ? project.color : "currentColor"
              }}
            >
              <div
                className="h-2"
                style={{ backgroundColor: project.color }}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.period}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-[#2b2b2b] rounded-full hover:bg-gray-200 dark:hover:bg-[#1a1a1a] transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start">
                        <span
                          className="inline-block h-2 w-2 rounded-full mt-2 mr-2"
                          style={{ backgroundColor: project.color }}
                        ></span>
                        <span className="text-sm">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-[#121212] text-gray-800 dark:text-gray-200 font-medium rounded-md border border-gray-300 dark:border-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

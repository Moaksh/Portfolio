"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
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
      title: "AI Powered Chatbot",
      period: "May 2023 - Aug 2023",
      description: [
        "Engineered a sophisticated AI chatbot utilizing the OpenAI API, featuring personalized interactions and dynamic responses.",
        "Implemented advanced natural language processing (NLP) techniques to ensure accurate and context-aware understanding of user inputs, resulting in more meaningful and relevant conversations.",
        "Integrated the chatbot into a React web application, creating a seamless and intuitive user experience.",
      ],
      technologies: ["React", "OpenAI API", "TailwindCSS", "JavaScript"],
      link: "#",
      github: "#",
      color: "#4CAF50",
    },
    {
      title: "E-commerce Website",
      period: "Feb 2023 - April 2023",
      description: [
        "Developed a full-stack e-commerce website using the MERN stack (MongoDB, Express.js, React, Node.js) with a focus on scalability and maintainability.",
        "Implemented user authentication and authorization using JWT (JSON Web Tokens) to ensure secure access to user data and prevent unauthorized access.",
        "Designed and implemented a responsive user interface (UI) using React and Tailwind CSS, providing a seamless user experience across devices.",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "Express.js",
        "Flask",
        "HTML",
        "TailwindCSS",
      ],
      link: "#",
      github: "#",
      color: "#FF5252",
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
              className="relative bg-white dark:bg-gray-800 rounded-lg border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              style={{
                borderColor: hoveredProject === index ? project.color : "black",
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
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-md border border-gray-300 dark:border-gray-600"
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

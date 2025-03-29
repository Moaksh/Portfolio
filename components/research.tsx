"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, FileText } from "lucide-react"

export default function Research() {
  const [expandedResearch, setExpandedResearch] = useState<number | null>(null)

  const researchItems = [
    {
      title: "How could we add emotional nuances to AI-generated music?",
      period: "Feb 2025 - Current",
      status: "In Process",
      type: "Research",
      description: [
        "Developing methodologies for enhancing emotional depth in AI-generated music, focusing on emotion-sensitive algorithms and the integration of cultural and contextual knowledge.",
        "Investigating neural architectures for affective expression in AI music systems, including the incorporation of emotion embeddings and hybrid variational autoencoder (VAE) frameworks.",
        "Explored the use of reinforcement learning (RL) with human feedback to create adaptive loops for emotional calibration in AI music generation.",
      ],
      color: "#FF5252",
    },
    {
      title: "A Comparative Study of BDM and TM in the Age of AI",
      period: "Jan 2025 - March 2025",
      status: "In review process",
      type: "Journal Article",
      description: [
        "Conducted a comparative analysis of Big Data Marketing (BDM) and Traditional Marketing (TM) in the age of AI, evaluating the strengths and weaknesses of each approach.",
        "Analyzed the operational efficiency, customer-specific targeting, and short-term reactivity of AI-driven Big Data Marketing (BDM), in contrast to the brand equity, emotional storytelling, and ethical considerations of Traditional Marketing (TM).",
        "Researched the application of hybrid models that integrate AI-driven BDM and TM, to leverage the precision and responsiveness of AI with the cultural awareness and credibility-building properties of traditional marketing.",
      ],
      color: "#3B82F6",
    },
    {
      title: "ISLR using Deep Learning: Attention is Everywhere",
      period: "Sept 2024 - Dec 2024",
      status: "Accepted",
      type: "Conference Proceeding",
      description: [
        "Developed an attention-based LSTM model for Indian Sign Language (ISL) recognition, achieving 94% classification accuracy.",
        "Designed a novel approach to capture temporal dependencies in ISL gestures by processing video as a stream of single frames.",
        "Integrated CNNs and LSTMs to leverage spatial feature extraction and temporal dependencies in gesture recognition.",
        "Focused on computational efficiency to enable real-time applicability in resource-constrained environments.",
      ],
      color: "#10B981",
    },
    {
      title: "AI in Finance: Navigating Ethical Quandaries",
      period: "Aug 2024 - Sept 2024",
      status: "Accepted",
      type: "Book Chapter",
      description: [
        "Investigated the challenges and opportunities of integrating AI in finance, including algorithmic bias, transparency, and accountability.",
        "Researched the role of Explainable AI (XAI) and Responsible AI in addressing ethical concerns in AI-driven finance.",
        "Synthesized findings on real-world cases and their management to illustrate the impact of ethical issues.",
        "Outlined guidelines for the ethical development of AI in finance, emphasizing fairness, accountability, and transparency.",
        "Recommended best practices for implementing Responsible AI, including stakeholder engagement, ethical AI frameworks, and continuous monitoring.",
      ],
      color: "#F59E0B",
    },
  ]

  return (
    <section id="research" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
            RESEARCH & <span className="text-[#FF5252]">PUBLICATIONS</span>
          </h2>
          <div className="h-2 w-20 bg-[#FF5252] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {researchItems.map((item, index) => (
            <motion.div
              key={index}
              layoutId={`research-${index}`}
              onClick={() => setExpandedResearch(expandedResearch === index ? null : index)}
              className="bg-white dark:bg-gray-800 rounded-lg border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <div className="h-2" style={{ backgroundColor: item.color }}></div>
              <div className="p-6 clickable">
                <div className="flex items-start justify-between clickable">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                      <span className="inline-block h-1 w-1 rounded-full bg-gray-500"></span>
                      <span
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: `${item.color}20`,
                          color: item.color,
                        }}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 rounded-full" style={{ backgroundColor: `${item.color}20` }}>
                    {item.type === "Research" ? (
                      <BookOpen className="h-5 w-5" style={{ color: item.color }} />
                    ) : (
                      <FileText className="h-5 w-5" style={{ color: item.color }} />
                    )}
                  </div>
                </div>

                {expandedResearch === index && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
                    <ul className="space-y-2">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start">
                          <span
                            className="inline-block h-2 w-2 rounded-full mt-2 mr-2"
                            style={{ backgroundColor: item.color }}
                          ></span>
                          <span className="text-sm">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


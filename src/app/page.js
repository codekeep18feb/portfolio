"use client"


import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

const skillTags = [
  "React", "Next.js", "React Native", "JavaScript", "TypeScript",
  "GraphQL", "Node", "Python", "Golang", "Django", "Redux",
  "AWS", "Docker", "PostgreSQL", "MongoDB", "Kubernetes",
  "CSS", "SASS", "Jest", "Express", "Linux"
];

const projects = [
  {
    title: "Image to Code Generation",
    duration: "Dec 2024 - Mar 2025",
    tags: ["React Native", "Typescript", "GraphQL", "AWS", "EKS"],
    desc: "Automated development using LLMs and image processing.",
    details: `This project was aimed at automating the development process for Wayfair. We used LLMs and image processing to generate frontend code automatically based on image input. It involved creating and refining backend and frontend GraphQL schemas, evaluating LLM-generated code, and integrating the solution with AWS infrastructure.`
  },
  {
    title: "Security Application",
    duration: "Jan 2023 - Oct 2024",
    tags: ["Golang", "React", "AWS", "Python"],
    desc: "Security features like SNMP, Captive Portal, performance optimization.",
    details: `Involved deep in SNMP implementation, backend services via Golang and Python, and infrastructure using AWS Lambda, DynamoDB, and Eventbridge. Played a crucial role in security enhancements and performance improvements.`
  },
  {
    title: "Logistic Platform",
    duration: "Oct 2021 - Dec 2023",
    tags: ["JavaScript", "React", "GCP", "Kubernetes"],
    desc: "Legacy support, backlog clearance, API integration.",
    details: `This platform involved rewriting legacy codebases, implementing REST APIs, improving React UI components, and managing deployments on GCP and Kubernetes.`
  },
  {
    title: "Global Logistic Platform",
    duration: "Aug 2021 - Sep 2022",
    tags: ["React Native", "Redux Toolkit", "Stripe", "TypeScript"],
    desc: "i18n, social auth, subscriptions, notifications.",
    details: `Built React Native components from Figma designs, integrated Stripe for payments, JWT + Passport.js for auth, implemented GraphQL subscriptions and i18n for multilingual support.`
  },
  {
    title: "Building Blocks",
    duration: "Jun 2020 - Apr 2021",
    tags: ["React Native", "Apollo", "Stripe", "GraphQL"],
    desc: "Outsourcing tasks between attorneys based on availability.",
    details: `Used React Native, Apollo, and GraphQL for building a task delegation system for attorneys. Supported Stripe payments, JWT authentication, and push notifications.`
  },
  {
    title: "Legacy Insurance App",
    duration: "Mar 2019 - Feb 2020",
    tags: ["Next", "GraphQL", "React", "Mongoose"],
    desc: "Refactor & upscale .NET app with modern tech stack.",
    details: `Migrated a legacy .NET app to React, Next.js, and GraphQL backend. Introduced reusable components, wrote tests with Jest, and handled backend integration with MongoDB/Mongoose.`
  }
];

export default function Home() {
  const [activeTags, setActiveTags] = useState(skillTags);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.tags.some((tag) => activeTags.includes(tag))
    );
  }, [activeTags]);

  const removeTag = (tagToRemove) => {
    setActiveTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      
      {/* <Hero /> */}

      <motion.h1 className={styles.title} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>Deepak Singh – Sr. Frontend Developer (9+ yrs)</motion.h1>

      <motion.div className={styles.section} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.tagList}>
          <AnimatePresence>
            {activeTags.map((tag) => (
              <motion.span
                key={tag}
                className={styles.tag}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className={styles.tagClose}
                >
                  ×
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div className={styles.section} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        <h2 className={styles.heading}>Projects ({filteredProjects.length})</h2>
        <div className={styles.projectList}>
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                className={styles.projectCard}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDuration}>{project.duration}</p>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.p className={styles.noProjects} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              No projects match selected skills.
            </motion.p>
          )}
        </div>
      </motion.div>

      {selectedProject && (
        <motion.div className={styles.modalOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className={styles.modalContent} initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)}>×</button>
            <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
            <p className={styles.modalDuration}>{selectedProject.duration}</p>
            <p className={styles.modalDescription}>{selectedProject.details}</p>
            <div className={styles.projectTags}>
              {selectedProject.tags.map(tag => (
                <span key={tag} className={styles.projectTag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

<div className={styles.aboutSection}>
  <h2>👨‍💻 About Me</h2>
  <p>
    After nearly a decade of working with top-tier tech—building scalable apps and mentoring teams—I’ve taken the leap into solo entrepreneurship.
    I founded <a href="https://magicchat.io" target="_blank" rel="noopener noreferrer">MagicChat.io</a>, a plug-and-play AI-powered chat & auth component provider for modern web apps.
  </p>
  <p>
    Freelancing taught me resilience and business sense early on—I made over $1000 helping clients at $22/hr. Then I shifted to full-time roles, leading critical product initiatives. Now, I’m building products I believe in, betting on myself, and crafting tools that empower devs.
  </p>
  <p>
    I value freedom, deep work, and building things that matter. I don’t like the 9–5 grind—and I’m glad to be writing my own rules now.
  </p>
</div>


<div className={styles.footer}>
  <p>📫 <strong>Email:</strong> <a href="mailto:deepaksingh.18feb@gmail.com">deepaksingh.18feb@gmail.com</a></p>
  <p>📱 <strong>Phone:</strong> <a href="tel:+919354026963">+91 9354026963</a></p>
  <p>💻 <strong>GitHub:</strong> <a href="https://github.com/codekeep18feb" target="_blank">github.com/codekeep18feb</a></p>
</div>



    </motion.div>
  );
}

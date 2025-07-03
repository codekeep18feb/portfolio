"use client"
import { useState, useMemo } from "react";
import styles from "./page.module.css";

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
    desc: "Automated development using LLMs and image processing."
  },
  {
    title: "Security Application",
    duration: "Jan 2023 - Oct 2024",
    tags: ["Golang", "React", "AWS", "Python"],
    desc: "Security features like SNMP, Captive Portal, performance optimization."
  },
  {
    title: "Logistic Platform",
    duration: "Oct 2021 - Dec 2023",
    tags: ["JavaScript", "React", "GCP", "Kubernetes"],
    desc: "Legacy support, backlog clearance, API integration."
  },
  {
    title: "Global Logistic Platform",
    duration: "Aug 2021 - Sep 2022",
    tags: ["React Native", "Redux Toolkit", "Stripe", "TypeScript"],
    desc: "i18n, social auth, subscriptions, notifications."
  },
  {
    title: "Building Blocks",
    duration: "Jun 2020 - Apr 2021",
    tags: ["React Native", "Apollo", "Stripe", "GraphQL"],
    desc: "Outsourcing tasks between attorneys based on availability."
  },
  {
    title: "Legacy Insurance App",
    duration: "Mar 2019 - Feb 2020",
    tags: ["Next", "GraphQL", "React", "Mongoose"],
    desc: "Refactor & upscale .NET app with modern tech stack."
  }
];

export default function Home() {
  const [activeTags, setActiveTags] = useState(skillTags);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.tags.some((tag) => activeTags.includes(tag))
    );
  }, [activeTags]);

  const removeTag = (tagToRemove) => {
    setActiveTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Deepak Singh – Sr. Frontend Developer (9+ yrs)</h1>

      <div className={styles.section}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.tagList}>
          {activeTags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className={styles.tagClose}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>Projects ({filteredProjects.length})</h2>
        <div className={styles.projectList}>
          {filteredProjects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDuration}>{project.duration}</p>
              <p className={styles.projectDesc}>{project.desc}</p>
              <div className={styles.projectTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.projectTag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <p className={styles.noProjects}>No projects match selected skills.</p>
          )}
        </div>
      </div>
    </div>
  );
}

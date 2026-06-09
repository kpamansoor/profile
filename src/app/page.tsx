"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Deck from "@/components/Deck";
import ProjectDrawer, { Project } from "@/components/ProjectDrawer";
import styles from "./page.module.css";

import featuredApps from "@/data/featuredApps.json";
import featuredWebApps from "@/data/featuredWebApps.json";
import avatarImg from "@/assets/images/avatar.png";

const PROJECTS: Project[] = [
  ...featuredApps.map((app) => ({
    id: app.name.toLowerCase().replace(/\s+/g, "-"),
    title: app.name,
    subtitle: "",
    description: app.description,
    category: "mobile" as const,
    tags: [],
    features: [],
    links: { playStore: app.playStoreLink },
    details: app.description,
    image: app.iconUrl,
    installs: app.installs,
    screenSample: app.screenSample,
  })),
  ...featuredWebApps.map((app) => ({
    id: app.name.toLowerCase().replace(/\s+/g, "-"),
    title: app.name,
    subtitle: "",
    description: app.description,
    category: "web" as const,
    tags: [],
    features: [],
    links: { live: app.liveLink, repo: app.repoLink },
    details: app.description,
    image: app.iconUrl
  })),
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pingtomansoor@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.pageLayout}>
      <main className="container">
        
        {/* Profile Intro */}
        <section className={`${styles.profileSection} fade-in`}>
          <div className={styles.avatarWrapper}>
            <Image
              className={styles.avatarImg}
              src={avatarImg}
              alt="Mohammed Mansoor"
              width={80}
              height={80}
              priority
            />
          </div>
          <div className={styles.bioContainer}>
            <h1 className={styles.titleName}>Mohammed Mansoor.</h1>
            <p className={styles.bioText}>
              Full-stack developer, mobile architect, and open-source maker. 
              I spend my time crafting fluid user interfaces, building resilient mobile apps, 
              and shaping web experiences that look and feel premium.
            </p>
            <p className={styles.subBioText}>
              This is home to my commonplace, where I list <Deck />, showcase my projects, 
              and write down thoughts about engineering.
            </p>
            <p className={styles.subBioText}>
              I enjoy meeting people who are building, exploring, or figuring things out. 
              If you&apos;d like to connect, we can{" "}
              <a 
                href="https://cal.com/mohammed-mansoor-s49epm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-accent"
              >
                meet over coffee
              </a>{" "}
              in Kuala Lumpur, or{" "}
              <span className={styles.emailActionWrapper}>
                {/* Desktop copy button */}
                <button className={`${styles.emailButton} ${styles.desktopCopy}`} onClick={handleCopyEmail}>email me</button>
                {copied && <span className={styles.copiedFeedback}>✓ Copied</span>}
                {/* Mobile mailto link */}
                <a href="mailto:pingtomansoor@gmail.com" className={`${styles.emailButton} ${styles.mobileMailto}`}>email me</a>
              </span>
            </p>
          </div>
        </section>

        {/* Mobile Applications Section */}
        <section id="mobile-apps" className={`${styles.portfolioSection} fade-in delay-1`}>
          <h2 className="section-title">Mobile Applications</h2>
          <div className={styles.projectList}>
            {PROJECTS.filter(p => p.category === "mobile").map((project) => {
              const cardContent = (
                <>
                  <div className={styles.projectCardHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {project.image && (
                        <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
                          <Image src={project.image} alt={`${project.title} icon`} fill style={{ borderRadius: '8px', objectFit: 'cover' }} />
                        </div>
                      )}
                      <div>
                        <h3 className={styles.projectCardTitle}>{project.title}</h3>
                        {project.subtitle && <p className={styles.projectCardSubtitle}>{project.subtitle}</p>}
                      </div>
                    </div>
                    <span className={styles.cardArrow}>→</span>
                  </div>
                  <p className={styles.projectCardDesc}>
                    {project.description.length > 100 ? `${project.description.slice(0, 100)}...` : project.description}
                  </p>
                  {project.installs && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                      Installs: {project.installs}
                    </p>
                  )}
                  <div className={styles.cardTags}>
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className={styles.miniTag}>{tag}</span>
                    ))}
                  </div>
                </>
              );

              if (project.links.playStore) {
                return (
                  <a 
                    key={project.id} 
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card ${styles.projectCard}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div 
                  key={project.id} 
                  className={`glass-card ${styles.projectCard}`}
                  onClick={() => setSelectedProject(project)}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </section>

        {/* Web Applications Section */}
        <section id="web-apps" className={`${styles.portfolioSection} fade-in delay-2`}>
          <h2 className="section-title">Web Applications</h2>
          <div className={styles.projectList}>
            {PROJECTS.filter(p => p.category === "web").map((project) => (
  <a
    key={project.id}
    href={project.links.live}
    target="_blank"
    rel="noopener noreferrer"
    className={`glass-card ${styles.projectCard}`}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <div className={styles.projectCardHeader}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {project.image && (
          <div style={{ position: 'relative', width: 40, height: 40, flexShrink: 0 }}>
            <Image src={project.image} alt={`${project.title} icon`} fill style={{ borderRadius: '8px', objectFit: 'cover' }} />
          </div>
        )}
        <div>
          <h3 className={styles.projectCardTitle}>{project.title}</h3>
          <p className={styles.projectCardSubtitle}>{project.subtitle}</p>
        </div>
      </div>
      <span className={styles.cardArrow}>→</span>
    </div>
    <p className={styles.projectCardDesc}>
      {project.description.length > 100 ? `${project.description.slice(0, 100)}...` : project.description}
    </p>
    <div className={styles.cardTags}>
      {project.tags.slice(0, 3).map(tag => (
        <span key={tag} className={styles.miniTag}>{tag}</span>
      ))}
    </div>
  </a>
))}
          </div>
        </section>

        {/* Technical Stack Summary */}
        <section id="tech-stack" className={`${styles.portfolioSection} fade-in delay-3`}>
          <h2 className="section-title">Core Competencies</h2>
          <div className={`glass-card ${styles.skillsCard}`}>
            <p className={styles.skillsIntro}>
              Engineering high-fidelity web and mobile products requires an ecosystem of reliable technology:
            </p>
            <div className={styles.skillsGrid}>
              <div className={styles.skillsGroup}>
                <h4>Mobile Architectures</h4>
                <p>Flutter, React Native, Kotlin, Sqlite, Android Native</p>
              </div>
              <div className={styles.skillsGroup}>
                <h4>Web & Backend</h4>
                <p>Next.js, React, Node.js, Python, TypeScript, AWS, MongoDB, MySQL, MSSQL, REST</p>
              </div>
              <div className={styles.skillsGroup}>
                <h4>Design & Tooling</h4>
                <p>Figma, Git, Vercel, Native bridges</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section / Footer */}
        <section id="connect" className={`${styles.footerSection} fade-in delay-4`}>
          <footer className={styles.footer}>
            <div className={styles.footerLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/mansoorkoori/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>·</span>
              <a href="https://cal.com/mohammed-mansoor-s49epm" target="_blank" rel="noopener noreferrer">Now</a>
            </div>
            <ThemeToggle />
          </footer>
        </section>

      </main>

      {/* Slide-up project details drawer */}
      <ProjectDrawer 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

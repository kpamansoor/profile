"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ProjectDrawer.module.css";
import playStoreBadge from "@/assets/images/GetItOnGooglePlay_Badge_Web_color_English.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "mobile" | "web";
  tags: string[];
  features: string[];
  links: {
    appStore?: string;
    playStore?: string;
    live?: string;
    github?: string;
  };
  details: string;
  installs?: string;
  image?: string;
  screenSample?: string;
}

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Open/close dialog based on selected project prop
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      dialog.showModal();
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [project]);

  // Handle closing events (Esc key, close button)
  const handleClose = () => {
    onClose();
  };

  // Handle click outside (light-dismiss fallback for all browsers)
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog || event.target !== dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isClickInside = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );

    if (!isClickInside) {
      dialog.close();
    }
  };

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className={`drawer ${styles.projectDrawer}`}
      onClick={handleBackdropClick}
      onClose={handleClose}
      aria-labelledby="drawer-title"
    >
      <div className="drawer-header">
        <div>
          <span className={styles.projectCategory}>{project.category === "mobile" ? "Mobile Application" : "Web Application"}</span>
          <h2 id="drawer-title" className="drawer-title">{project.title}</h2>
        </div>
        <button 
          className="drawer-close" 
          onClick={() => dialogRef.current?.close()} 
          aria-label="Close details"
        >
          ✕
        </button>
      </div>

      <div className="drawer-body">
        <div className={styles.drawerGrid}>
          {/* Left Column: Media / Details */}
          <div className={styles.mainContent}>
            {/* Visual Mockup Container */}
            <div className={styles.visualContainer} style={{ background: `linear-gradient(135deg, var(--border), var(--card-bg))` }}>
              {project.category === "mobile" ? (
                <div className={styles.phoneMockup}>
                  {project.screenSample ? (
                    <Image src={project.screenSample} alt={`${project.title} screenshot`} fill style={{ objectFit: 'cover' }} sizes="180px" />
                  ) : (
                    <div className={styles.phoneScreen}>
                      {/* Simulated App Interface */}
                      <div className={styles.appHeader}>
                        <span className={styles.appLogo}>❖</span>
                        <span>{project.title}</span>
                      </div>
                      <div className={styles.appContent}>
                        <div className={styles.appCard} />
                        <div className={styles.appCard} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles.browserMockup}>
                  <div className={styles.browserBar}>
                    <div className={styles.dots}><span /><span /><span /></div>
                    <div className={styles.addressBar}>https://{project.title.toLowerCase().replace(/\s+/g, '')}.com</div>
                  </div>
                  <div className={styles.browserScreen}>
                    {/* Simulated Web Interface */}
                    <div className={styles.webHeader} />
                    <div className={styles.webHero} />
                    <div className={styles.webGrid}>
                      <div className={styles.webCell} />
                      <div className={styles.webCell} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <h3 className={styles.subheading}>About the project</h3>
            <p className={styles.projectLongDesc}>{project.details}</p>

            {project.features && project.features.length > 0 && (
              <>
                <h3 className={styles.subheading}>Key Features</h3>
                <ul className={styles.featuresList}>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className={styles.checkmark}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Right Column: Sidebar Specs & Links */}
          <div className={styles.sidebar}>
            {project.tags && project.tags.length > 0 && (
              <div className={styles.sidebarSection}>
                <h4 className={styles.sidebarHeading}>Tech Stack</h4>
                <div className={styles.tagsContainer}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.sidebarSection}>
              <h4 className={styles.sidebarHeading}>Available On</h4>
              <div className={styles.linksGrid}>
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    <span>Launch Web App</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.outline}`}>
                    <span>View Repository</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  </a>
                )}
                {project.links.appStore && (
                  <a href={project.links.appStore} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    <span>App Store</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </a>
                )}
                {project.links.playStore && (
                  <a href={project.links.playStore} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'transform 0.2s ease', WebkitTapHighlightColor: 'transparent' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <Image src={playStoreBadge} alt="Get it on Google Play" height={40} style={{ width: 'auto', display: 'block' }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

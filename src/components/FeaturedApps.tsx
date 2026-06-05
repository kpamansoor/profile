import React from 'react';
import apps from '@/data/featuredApps.json';
import styles from './FeaturedApps.module.css';

export default function FeaturedApps() {
  return (
    <section id="featured-apps" className={styles.section}>

      <div className={styles.grid}>
        {apps.map((app, idx) => (
          <a
            key={idx}
            href={app.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <img src={app.iconUrl} alt={app.name} className={styles.icon} />
            </div>
            <h3 className={styles.appName}>{app.name}</h3>
            <p className={styles.description}>{app.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

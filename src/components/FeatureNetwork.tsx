"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import styles from "./FeatureNetwork.module.css";

export interface NetworkItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeatureNetworkProps {
  items: NetworkItem[];
  hubSrc: string;
  hubAlt: string;
}

// Ring placement in degrees (0 = right, positive = down). Right side reads top to bottom,
// then the left side reads bottom to top.
const ANGLES = [-60, -30, 0, 30, 120, 150, 180, 210, 240];
// Ring radius in pixels, so the ring is a true circle regardless of stage width.
const RADIUS = 260;

export default function FeatureNetwork({ items, hubSrc, hubAlt }: FeatureNetworkProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  // Mouse parallax: values from -0.5 to 0.5 drive layer offsets in CSS.
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    wrap.style.setProperty("--mx", ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    wrap.style.setProperty("--my", ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  };

  const handleLeave = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.setProperty("--mx", "0");
    wrap.style.setProperty("--my", "0");
  };

  return (
    <div
      ref={wrapRef}
      className={styles.network}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className={styles.stage}>
        <span className={styles.ring} aria-hidden="true" />

        <div className={styles.hub}>
          <Image
            src={hubSrc}
            alt={hubAlt}
            width={112}
            height={112}
            unoptimized
            className={styles.hubLogo}
          />
        </div>

        {items.map((item, index) => {
          const angle = ANGLES[index] ?? (index / items.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = Math.round(RADIUS * Math.cos(rad));
          const y = Math.round(RADIUS * Math.sin(rad));
          const onRight = Math.cos(rad) >= 0;

          return (
            <article
              key={item.title}
              className={styles.node}
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            >
              <span className={styles.nodeIcon} style={{ animationDelay: `${index * 0.45}s` }}>
                {item.icon}
              </span>
              <div className={`${styles.label} ${onRight ? styles.labelRight : styles.labelLeft}`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

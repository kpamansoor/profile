"use client";

import { useState } from "react";
import styles from "./Deck.module.css";

interface DeckItem {
  id: string;
  label: string;
  targetId: string;
}

export default function Deck() {
  const [isOpen, setIsOpen] = useState(false);

  const items: DeckItem[] = [
    { id: "mobile", label: "Mobile Apps", targetId: "mobile-apps" },
    { id: "web", label: "Web Apps", targetId: "web-apps" },
  ];

  const handleItemClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <span
      className={styles.deckWrapper}
      onClick={() => setIsOpen(!isOpen)}
      onTouchEnd={() => setIsOpen(!isOpen)}
    >
      <span className={styles.triggerText}>everything</span>
      <span className={`${styles.deck} ${isOpen ? styles.open : ""}`} aria-hidden="true">
        {items.map((item, index) => (
          <span
            key={item.id}
            className={styles.card}
            style={{ "--i": index } as React.CSSProperties}
            onClick={(e) => {
              e.stopPropagation();
              handleItemClick(item.targetId);
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              handleItemClick(item.targetId);
            }}
          >
            {item.label}
          </span>
        ))}
      </span>
    </span>
  );
}

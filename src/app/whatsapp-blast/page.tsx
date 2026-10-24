import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./WhatsAppBlast.module.css";
import FeatureNetwork from "@/components/FeatureNetwork";
import desktopApps from "@/data/desktopApps.json";

type DesktopApp = (typeof desktopApps)[number];

function getApp(): DesktopApp {
  const found = desktopApps.find((item) => item.slug === "whatsapp-blast");
  if (!found) {
    throw new Error("WhatsAppBlast entry missing from desktopApps.json");
  }
  return found;
}

const app = getApp();

export const metadata: Metadata = {
  title: `${app.name} | Automated Sender`,
  description: app.headline,
};

const STEPS = [
  {
    title: "Scan QR",
    description: "Link your WhatsApp by scanning the QR code once.",
    image: "/whatsapp-blast/step-qr.svg",
    imageAlt: "Illustration of a QR code being scanned to link WhatsApp",
  },
  {
    title: "Add contacts",
    description: "Import a CSV or Excel file, or paste numbers into a group.",
    image: "/whatsapp-blast/step-contacts.svg",
    imageAlt: "Illustration of a contacts file imported into a group list",
  },
  {
    title: "Write a template",
    description: "Compose your message and personalize it for each contact.",
    image: "/whatsapp-blast/step-template.svg",
    imageAlt: "Illustration of a message template with a name placeholder",
  },
  {
    title: "Send",
    description: "Start the campaign and watch sent and failed counts update live.",
    image: "/whatsapp-blast/step-send.svg",
    imageAlt: "Illustration of a campaign progress bar with live sent and failed counts",
  },
];

const FEATURES = [
  {
    title: "Sequential campaign sending",
    description:
      "Pick a group and a template, and the app sends messages one by one.",
  },
  {
    title: "Message templates",
    description:
      "Save reusable messages for reminders, follow-ups, offers and announcements.",
  },
  {
    title: "Contact groups",
    description:
      "Organize recipients into named groups. Paste numbers or type them in. The free version allows up to 5 groups with 100 contacts each.",
  },
  {
    title: "Quick QR login",
    description:
      "Scan once with your own WhatsApp. The session is saved, so you stay logged in next time.",
  },
  {
    title: "Live progress and stats",
    description: "See sent and failed counts as the campaign runs.",
  },
  {
    title: "Adjustable delay",
    description: "Set the gap between messages for natural, safer sending.",
  },
  {
    title: "Message history",
    description: "Review a full record of past campaigns and their results.",
  },
  {
    title: "Secure logout",
    description:
      "Switch WhatsApp accounts any time, with a confirmation prompt.",
  },
  {
    title: "Built-in quick-start guide",
    description:
      'An in-app "How to use" walkthrough helps new users get going.',
  },
];

const WHY_PEOPLE_LIKE_IT = [
  {
    title: "Runs on your PC",
    description:
      "Your contacts and messages stay on your machine and are not uploaded to a cloud service.",
    image: "/whatsapp-blast/why/runs-on-pc.jpg",
    imageAlt: "Laptop open on a desk, representing an app that runs on your own computer",
  },
  {
    title: "Uses your own WhatsApp number",
    description: "No Business API approval or per-message fees.",
    image: "/whatsapp-blast/why/own-whatsapp-number.jpg",
    imageAlt: "Smartphone with WhatsApp among its app icons",
  },
  {
    title: "Works offline-first UI",
    description:
      "The interface and fonts are bundled, so it opens fast with no CDN dependency. WhatsApp itself still needs internet.",
    image: "/whatsapp-blast/why/fast-offline-ui.jpg",
    imageAlt: "Sleek laptop with a clean screen, representing a fast, lightweight interface",
  },
  {
    title: "Easy installer",
    description:
      "A standard Windows setup file that you can share and install in minutes.",
    image: "/whatsapp-blast/why/easy-installer.jpg",
    imageAlt: "Person using a laptop and phone at a cafe table",
  },
  {
    title: "Clean, modern dark UI",
    description: "A green-accented interface that is easy to read.",
    image: "/whatsapp-blast/why/dark-ui.jpg",
    imageAlt: "Code editor on a laptop screen with a dark theme",
  },
];

// Free vs Pro rows exactly as provided in the spec.
const PLANS = [
  { feature: "Contact groups", free: "Up to 5", pro: "Unlimited" },
  { feature: "Contacts per group", free: "100", pro: "1000" },
  { feature: "CSV / Excel import", free: "No", pro: "Yes" },
  { feature: "Templates and campaigns", free: "Yes", pro: "Unlimited" },
  { feature: "Priority support and early updates", free: "No", pro: "Yes" },
];

const FAQS = [
  {
    question: "Is it safe?",
    answer:
      "Your contacts and messages stay on your computer. The adjustable delay between messages helps sending look natural. Still, only message people who have agreed to hear from you, to avoid account restrictions.",
  },
  {
    question: "Do I need the WhatsApp Business API?",
    answer:
      "No. WhatsAppBlast works with your own WhatsApp number, so there is no Business API approval and no per-message fees.",
  },
  {
    question: "Which Windows versions are supported?",
    answer:
      "WhatsAppBlast supports Windows 7 and above. It is distributed as a standard Windows setup file that you can install in minutes.",
  },
];

const DISCLAIMER =
  "WhatsAppBlast is an independent tool and is not affiliated with or endorsed by WhatsApp or Meta. Use responsibly and only message people who have agreed to hear from you, to avoid account restrictions.";

const DISCLAIMER_LIABILITY =
  "This tool is not responsible for any ban, suspension or restriction placed on your WhatsApp account. You are solely responsible for how you use it and for the messages you send.";

type IconName =
  | "qr"
  | "users"
  | "template"
  | "send"
  | "timer"
  | "chart"
  | "history"
  | "book"
  | "logout"
  | "pc"
  | "phone"
  | "bolt"
  | "download"
  | "palette";

const ICON_FOR_TITLE: Record<string, IconName> = {
  "Quick QR login": "qr",
  "Contact groups": "users",
  "Message templates": "template",
  "Sequential campaign sending": "send",
  "Adjustable delay": "timer",
  "Live progress and stats": "chart",
  "Message history": "history",
  "Built-in quick-start guide": "book",
  "Secure logout": "logout",
  "Runs on your PC": "pc",
  "Uses your own WhatsApp number": "phone",
  "Works offline-first UI": "bolt",
  "Easy installer": "download",
  "Clean, modern dark UI": "palette",
};

const ICON_PATHS: Record<IconName, ReactNode> = {
  qr: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 17h3v3h-3z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="4" />
      <path d="M17 11a4 4 0 1 0 0-8" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </>
  ),
  template: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </>
  ),
  send: (
    <>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4z" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2M10 2h4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
    </>
  ),
  history: (
    <>
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5M12 7v5l3 2" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5z" />
      <path d="M4 19.5V22h16" />
    </>
  ),
  logout: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5M21 12H9" />
    </>
  ),
  pc: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  phone: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </>
  ),
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />,
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5M12 15V3" />
    </>
  ),
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.5-3.3 2 2 0 0 1 1.5-3.7H17a5 5 0 0 0 5-5C22 6 17.5 2 12 2z" />
    </>
  ),
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

const FLOW_TONES = ["toneBright", "toneDeep", "toneTeal", "toneDark"] as const;

function valueClass(value: string) {
  if (value === "No") return styles.no;
  if (value === "Yes" || value === "Unlimited") return styles.yes;
  return undefined;
}

export default function WhatsAppBlastPage() {
  return (
    <div className={styles.pageLayout}>
      <main className="container">
        <header className={`${styles.hero} fade-in`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Automated Sender</p>
            <h1 className={styles.title}>{app.name}</h1>
            <p className={styles.headline}>{app.headline}</p>
            <p className={styles.tagline}>{app.tagline}</p>
            <p className={styles.meta}>
              Version {app.version} &middot; {app.platform} setup file &middot; Free version available
            </p>
          </div>

          <div className={styles.heroAside}>
            <Image
              src="/whatsapp-blast-logo.svg"
              alt={`${app.name} logo`}
              width={160}
              height={160}
              unoptimized
              priority
              className={styles.heroLogo}
            />
            <div className={styles.actions}>
              <a
                className={styles.primaryBtn}
                href={app.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="download" />
                <span>Download for Windows</span>
              </a>
            </div>
          </div>
        </header>

        <section className={`${styles.section} fade-in delay-1`}>
          <h2 className="section-title">How it works</h2>
          <ol className={styles.flow}>
            {STEPS.map((step, index) => {
              const isLast = index === STEPS.length - 1;
              const isOdd = index % 2 === 1;
              const tone = FLOW_TONES[index % FLOW_TONES.length];
              return (
                <li key={step.title} className={styles.flowRow}>
                  {!isLast && (
                    <svg
                      className={`${styles.flowConnector} ${isOdd ? styles.flowConnectorFlip : ""}`}
                      viewBox="0 0 200 180"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M100 0 C 180 45, 20 135, 100 180" />
                    </svg>
                  )}
                  <span className={styles.flowNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`${styles.flowPill} ${isOdd ? styles.flowPillLeft : styles.flowPillRight} ${styles[tone]}`}
                  >
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                  <figure
                    className={`${styles.flowVisual} ${isOdd ? styles.flowVisualRight : styles.flowVisualLeft}`}
                  >
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={300}
                      height={180}
                      unoptimized
                      className={styles.flowImage}
                    />
                  </figure>
                </li>
              );
            })}
          </ol>
        </section>

        <section className={`${styles.section} ${styles.fullBleed} fade-in delay-2`}>
          <h2 className={`section-title ${styles.fullBleedTitle}`}>WhatsAppBlast features</h2>
          <FeatureNetwork
            hubSrc="/whatsapp-blast-logo.svg"
            hubAlt={`${app.name} logo`}
            items={FEATURES.map((feature) => ({
              title: feature.title,
              description: feature.description,
              icon: <Icon name={ICON_FOR_TITLE[feature.title]} />,
            }))}
          />
        </section>

        <section className={`${styles.section} fade-in delay-2`}>
          <h2 className="section-title">Why people will like it</h2>
          <ol className={styles.flow}>
            {WHY_PEOPLE_LIKE_IT.map((item, index) => {
              const isLast = index === WHY_PEOPLE_LIKE_IT.length - 1;
              const isOdd = index % 2 === 1;
              const tone = FLOW_TONES[index % FLOW_TONES.length];
              return (
                <li key={item.title} className={styles.whyRow}>
                  {!isLast && (
                    <svg
                      className={`${styles.flowConnector} ${isOdd ? styles.flowConnectorFlip : ""}`}
                      viewBox="0 0 200 180"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M100 0 C 180 45, 20 135, 100 180" />
                    </svg>
                  )}
                  <figure className={styles.whyNode}>
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={272}
                      height={272}
                      className={styles.whyPhoto}
                    />
                    <span className={styles.whyBadge}>
                      <Icon name={ICON_FOR_TITLE[item.title]} />
                    </span>
                  </figure>
                  <div
                    className={`${styles.whyPill} ${isOdd ? styles.whyPillLeft : styles.whyPillRight} ${styles[tone]}`}
                  >
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section id="pricing" className={`${styles.section} fade-in delay-3`}>
          <h2 className="section-title">Free vs Pro</h2>
          <div className={styles.planGrid}>
            <article className={`glass-card ${styles.planCard}`}>
              <h3>Free</h3>
              <ul className={styles.planList}>
                {PLANS.map((row) => (
                  <li key={row.feature}>
                    <span>{row.feature}</span>
                    <strong className={valueClass(row.free)}>{row.free}</strong>
                  </li>
                ))}
              </ul>
            </article>

            <article className={`glass-card ${styles.planCard} ${styles.planPro}`}>
              <h3>Pro</h3>
              <ul className={styles.planList}>
                {PLANS.map((row) => (
                  <li key={row.feature}>
                    <span>{row.feature}</span>
                    <strong className={valueClass(row.pro)}>{row.pro}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={`${styles.section} fade-in delay-3`}>
          <h2 className="section-title">Frequently asked questions</h2>
          <div className={styles.faq}>
            {FAQS.map((faq) => (
              <details key={faq.question} className={`${styles.faqItem} glass-card`}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`${styles.section} fade-in delay-4`}>
          <div className={`${styles.disclaimer} glass-card`} role="note">
            <strong className={styles.disclaimerTitle}>Important disclaimer</strong>
            <p>{DISCLAIMER}</p>
            <p>{DISCLAIMER_LIABILITY}</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            <a href={app.downloadLink} target="_blank" rel="noopener noreferrer">
              Download for Windows
            </a>
            <a href={`mailto:${app.supportEmail}`}>Support: {app.supportEmail}</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

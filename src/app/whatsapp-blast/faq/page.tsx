import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./faq.module.css";

const SITE_URL = "https://www.mdmansoor.in";
const PAGE_URL = `${SITE_URL}/whatsapp-blast/faq`;
const OG_IMAGE_URL = `${SITE_URL}/whatsapp-blast/og-image.png`;

export const metadata: Metadata = {
  title: "WhatsAppBlast FAQ: setup, contacts, templates, campaigns and safety",
  description:
    "Answers about WhatsAppBlast: how to link WhatsApp, create contact groups, write templates, send campaigns, read history and use the app safely, with screenshots.",
  keywords: [
    "WhatsAppBlast FAQ",
    "WhatsAppBlast guide",
    "WhatsAppBlast tutorial",
    "how to use WhatsAppBlast",
    "WhatsApp bulk sender guide",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  icons: {
    icon: "/whatsapp-blast-logo.svg",
  },
  openGraph: {
    title: "WhatsAppBlast FAQ",
    description:
      "Answers about WhatsAppBlast: how to link WhatsApp, create contact groups, write templates, send campaigns, read history and use the app safely, with screenshots.",
    url: PAGE_URL,
    siteName: "Mansoor",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_URL,
        secureUrl: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "WhatsAppBlast logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsAppBlast FAQ",
    description:
      "Complete guide: how to link WhatsApp, create contact groups, write templates, send campaigns, and use the app safely.",
    images: [OG_IMAGE_URL],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is WhatsAppBlast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsAppBlast is a desktop app that sends WhatsApp messages to groups of contacts you choose, one after another, from your own computer. It uses your own WhatsApp number, so there is no Business API approval, no per-message fee and no coding. You organise recipients into contact groups, save reusable message templates, and run a campaign while the app shows live sent and failed counts. Every message is recorded in a history you can search and export.",
      },
    },
    {
      "@type": "Question",
      name: "Is WhatsAppBlast free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The free version lets you create up to 5 contact groups with up to 100 contacts each, and includes message templates and campaigns. Pro raises those limits and adds CSV and Excel import.",
      },
    },
    {
      "@type": "Question",
      name: "Which computers does it run on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsAppBlast supports Windows 7 and above and is installed with a standard setup file. There is also a build for Apple Desktop. Both downloads are on the WhatsAppBlast page.",
      },
    },
  ],
};

type Section = {
  id: string;
  title: string;
  items: FAQ[];
};

type FAQ = {
  id: string;
  question: string;
  answer: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
};

const FAQ_SECTIONS: Section[] = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        id: "what-is",
        question: "What is WhatsAppBlast?",
        answer: (
          <>
            <p>
              WhatsAppBlast is a desktop app that sends WhatsApp messages to groups of contacts
              you choose, one after another, from your own computer. It uses your own WhatsApp
              number, so there is no Business API approval, no per-message fee and no coding.
            </p>
            <p>
              You organise recipients into contact groups, save reusable message templates, and
              run a campaign while the app shows live sent and failed counts. Every message is
              recorded in a history you can search and export.
            </p>
          </>
        ),
      },
      {
        id: "is-free",
        question: "Is WhatsAppBlast free?",
        answer: (
          <p>
            Yes. The free version lets you create up to 5 contact groups with up to 100 contacts
            each, and includes message templates and campaigns. Pro raises those limits and adds
            CSV and Excel import. See the pricing table on the main page for the full comparison.
          </p>
        ),
      },
      {
        id: "which-computers",
        question: "Which computers does it run on?",
        answer: (
          <p>
            WhatsAppBlast supports Windows 7 and above and is installed with a standard setup
            file. There is also a build for Apple Desktop. Both downloads are on the main
            WhatsAppBlast page.
          </p>
        ),
      },
      {
        id: "need-business-api",
        question: "Do I need the WhatsApp Business API?",
        answer: (
          <p>
            No. WhatsAppBlast works with your own WhatsApp number, so you do not need Business
            API approval and you do not pay per message.
          </p>
        ),
      },
    ],
  },
  {
    id: "linking-whatsapp",
    title: "Linking your WhatsApp",
    items: [
      {
        id: "link-whatsapp",
        question: "How do I link my WhatsApp account?",
        answer: (
          <>
            <p>
              You link your account once by scanning a QR code, the same way you would link
              WhatsApp Web.
            </p>
            <ol>
              <li>Open WhatsAppBlast. A QR code appears on the first screen.</li>
              <li>
                On your phone, open WhatsApp and go to Linked devices (in Settings on iPhone, or
                in the menu on Android).
              </li>
              <li>Choose Link a device and scan the QR code on your computer screen.</li>
              <li>When the link succeeds, the app opens on the Contacts page.</li>
            </ol>
          </>
        ),
        image: {
          src: "/whatsapp-blast/faq-images/activity-800.webp",
          alt: "WhatsAppBlast QR code linking screen",
        },
      },
      {
        id: "scan-every-time",
        question: "Do I have to scan the QR code every time?",
        answer: (
          <p>
            No. WhatsAppBlast saves your session on your computer, so you stay logged in the next
            time you open it. You only need to scan again after you log out.
          </p>
        ),
      },
    ],
  },
  {
    id: "contacts",
    title: "Creating and managing contacts",
    items: [
      {
        id: "create-group",
        question: "How do I create a contact group?",
        answer: (
          <>
            <p>
              A contact group is a named list of recipients. You pick one group each time you
              send a campaign.
            </p>
            <ol>
              <li>Open the Contacts tab.</li>
              <li>
                Type a name in <strong>Group name</strong>, for example <code>Test Group</code>.
              </li>
              <li>Paste or type your numbers into the Numbers box.</li>
              <li>Click Save group.</li>
              <li>
                A confirmation appears when the group is saved, and the group shows up under
                Saved groups.
              </li>
            </ol>
          </>
        ),
        image: {
          src: "/whatsapp-blast/faq-images/contacts-filled-800.webp",
          alt: "Create contact group interface",
        },
      },
      {
        id: "phone-format",
        question: "What format should phone numbers be in?",
        answer: (
          <>
            <p>Include the country code with every number, starting with a plus sign.</p>
            <p>Enter one number per line, or separate numbers with commas.</p>
            <p>
              Example:
              <br />
              <code>+14155552671</code>
              <br />
              <code>+447911123456</code>
            </p>
            <p>Each group holds up to 100 contacts on the free version.</p>
          </>
        ),
      },
      {
        id: "find-delete-group",
        question: "How do I find or delete a saved group?",
        answer: (
          <p>
            Saved groups appear on the right side of the Contacts tab. Each one shows its name,
            how many numbers it holds and a Delete button. Use the search box to find a group by
            its name or by a number inside it.
          </p>
        ),
      },
      {
        id: "how-many-groups",
        question: "How many groups and contacts can I have?",
        answer: (
          <p>
            The free version allows up to 5 groups with up to 100 contacts each. Pro allows
            unlimited groups with up to 1,000 contacts each. A counter on the Contacts tab shows
            how many groups you have used.
          </p>
        ),
      },
      {
        id: "import-csv",
        question: "Can I import contacts from a CSV or Excel file?",
        answer: (
          <p>
            Yes, on Pro. The Contacts tab has an <strong>Import CSV / Excel</strong> button that
            fills a group from a spreadsheet. On the free version, paste or type your numbers
            into a group instead.
          </p>
        ),
      },
    ],
  },
  {
    id: "templates",
    title: "Writing and saving message templates",
    items: [
      {
        id: "write-template",
        question: "How do I write and save a message template?",
        answer: (
          <>
            <p>
              Templates let you reuse the same message for reminders, follow-ups, offers and
              announcements.
            </p>
            <ol>
              <li>Open the Templates tab.</li>
              <li>Enter a Template name.</li>
              <li>Write your text in the Message box.</li>
              <li>
                The Live preview beside it shows how the message will look in a chat. Check it
                before you save.
              </li>
              <li>Save the template.</li>
              <li>It appears under Saved templates.</li>
            </ol>
          </>
        ),
        image: {
          src: "/whatsapp-blast/faq-images/templates-800.webp",
          alt: "Message template editor with live preview",
        },
      },
      {
        id: "personalise-name",
        question: "How do I personalise a message with a name?",
        answer: (
          <>
            <p>
              Type <code>{"{{"}</code>
              <code>Name</code>
              <code>{"}}"}</code> in your message wherever the contact's name should appear.
            </p>
            <p>
              Example: <code>Hi {"{{"} Name {"}}"}, your appointment is tomorrow.</code>
            </p>
            <p>Check the live preview before you send.</p>
          </>
        ),
      },
      {
        id: "edit-template",
        question: "How do I edit or remove a template?",
        answer: (
          <p>
            Click a template under Saved templates to load it into the editor, change the text
            and choose <strong>Update template</strong>. To delete one, click <strong>Remove</strong> next
            to its name.
          </p>
        ),
      },
    ],
  },
  {
    id: "campaigns",
    title: "Sending campaigns",
    items: [
      {
        id: "send-campaign",
        question: "How do I send a campaign?",
        answer: (
          <>
            <p>
              A campaign sends one template to every contact in one group.
            </p>
            <ol>
              <li>Open the Campaign tab.</li>
              <li>Choose a saved message from the Template list. Its text loads into the message box.</li>
              <li>Choose a group from the Contact list. The app shows the group name and how many contacts it has.</li>
              <li>Set the send delay.</li>
              <li>Check the preview, then click Send message.</li>
            </ol>
          </>
        ),
        image: {
          src: "/whatsapp-blast/faq-images/campaign-sending-800.webp",
          alt: "Campaign sending interface",
        },
      },
      {
        id: "send-delay",
        question: "What does the send delay do, and what should I set?",
        answer: (
          <>
            <p>
              The send delay is the pause between one message and the next. A longer gap looks
              more natural and is gentler on your account; a shorter gap finishes sooner.
            </p>
            <p>Adjust it with the slider on the Campaign tab. It starts at 4 seconds.</p>
            <p>
              No delay can guarantee your account will not be restricted. As general guidance, use
              a longer delay for bigger lists, and always message people who have agreed to hear
              from you.
            </p>
          </>
        ),
      },
      {
        id: "pause-resume",
        question: "Can I pause or stop a campaign that is running?",
        answer: (
          <p>
            Yes. The <strong>Pause</strong> button stops the campaign immediately. Click{" "}
            <strong>Resume</strong> to carry on where it left off, or close the Campaign tab to
            abandon it and start a new campaign.
          </p>
        ),
      },
      {
        id: "see-progress",
        question: "Can I see the progress and results while the campaign is running?",
        answer: (
          <>
            <p>
              Yes. The Campaign tab shows live progress while you send: a count of messages sent
              and failed so far, and the name and number of the contact being contacted right now.
            </p>
            <p>When the campaign finishes, the app shows a summary of results.</p>
          </>
        ),
        image: {
          src: "/whatsapp-blast/faq-images/campaign-complete-800.webp",
          alt: "Campaign completion summary",
        },
      },
    ],
  },
  {
    id: "history",
    title: "Campaign history",
    items: [
      {
        id: "view-history",
        question: "How do I see the results of a past campaign?",
        answer: (
          <>
            <p>Open the History tab. Every campaign you have ever run is listed there, with:</p>
            <ul>
              <li>The template message you sent</li>
              <li>The group name and size</li>
              <li>The date and time you sent it</li>
              <li>How many messages were sent and how many failed</li>
            </ul>
            <p>Click a row to see more detail about which numbers received the message and which did not.</p>
          </>
        ),
        image: {
          src: "/whatsapp-blast/faq-images/history-800.webp",
          alt: "Campaign history viewer",
        },
      },
    ],
  },
  {
    id: "safety",
    title: "Safety and account protection",
    items: [
      {
        id: "is-safe",
        question: "Is it safe?",
        answer: (
          <>
            <p>
              Your contacts and messages stay on your computer. The adjustable delay between
              messages helps sending look natural.
            </p>
            <p>
              <strong>Always message only people who have agreed to hear from you.</strong> Mass
              messaging can trigger restrictions on your WhatsApp account, even if delays are
              used.
            </p>
          </>
        ),
      },
      {
        id: "account-restrictions",
        question: "What if my account gets restricted?",
        answer: (
          <p>
            WhatsAppBlast is not responsible for any ban, suspension or restriction placed on
            your account. You are solely responsible for how you use it and for the messages you
            send. Only message people who have agreed to hear from you, to reduce the risk of
            restrictions.
          </p>
        ),
      },
      {
        id: "log-out",
        question: "How do I log out or switch accounts?",
        answer: (
          <>
            <p>Click the Profile menu in the top right.</p>
            <p>Choose Logout.</p>
            <p>Confirm the logout with a second click.</p>
            <p>Open WhatsAppBlast again and scan a QR code to link a different WhatsApp account.</p>
          </>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className={styles.root}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className={styles.header}>
        <div className={styles.wrap}>
          <Link href="/whatsapp-blast" className={styles.backLink}>
            ← WhatsAppBlast
          </Link>
          <h1 className={styles.h1}>WhatsAppBlast FAQ</h1>
          <p className={styles.lede}>
            Everything you need to link your WhatsApp, organise contacts, write templates and
            send a campaign, with screenshots of each step.
          </p>
          <p className={styles.meta}>Updated November 2026 · Covers version 1.0.0</p>
        </div>
      </header>

      <div className={styles.wrap}>
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="On this page">
            <p className={styles.tocTitle}>On this page</p>
            <ul className={styles.tocList}>
              {FAQ_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.tocLink}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <main className={styles.main}>
            {FAQ_SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2 className={styles.h2}>{section.title}</h2>
                {section.items.map((item) => (
                  <div key={item.id} className={styles.qaBlock}>
                    <h3 className={styles.h3} id={item.id}>
                      <a href={`#${item.id}`} className={styles.anchor}>
                        #
                      </a>
                      {item.question}
                    </h3>
                    <div className={styles.answer}>{item.answer}</div>
                    {item.image && (
                      <figure className={styles.figure}>
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          width={800}
                          height={600}
                          className={styles.image}
                          unoptimized
                        />
                        {item.image.caption && (
                          <figcaption className={styles.figcaption}>{item.image.caption}</figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                ))}
              </section>
            ))}

            <section className={styles.helpSection}>
              <h2 className={styles.helpHeading}>Need more help?</h2>
              <p>
                Check the in-app guide for step-by-step walkthroughs, or{" "}
                <a href="mailto:pingtomansoor@gmail.com">email us</a> with questions.
              </p>
              <div className={styles.buttonGroup}>
                <Link href="/whatsapp-blast" className={styles.button}>
                  Back to WhatsAppBlast
                </Link>
                <a href="mailto:pingtomansoor@gmail.com" className={`${styles.button} ${styles.altButton}`}>
                  Contact Support
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <p>
            WhatsAppBlast is an independent tool and is not affiliated with or endorsed by WhatsApp
            or Meta. Use responsibly and only message people who have agreed to hear from you.
          </p>
        </div>
      </footer>
    </div>
  );
}

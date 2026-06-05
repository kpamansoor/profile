import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mansoor — Developer & Maker",
  description: "Personal portfolio showcasing web applications, mobile applications, and experimental projects. Designed in Bengaluru, India.",
  keywords: ["Software Engineer", "Full Stack Developer", "Mobile App Developer", "React Native", "Next.js", "Portfolio"],
  authors: [{ name: "Mansoor" }],
  openGraph: {
    title: "Mansoor — Developer & Maker",
    description: "Personal portfolio showcasing web applications, mobile applications, and experimental projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansoor — Developer & Maker",
    description: "Personal portfolio showcasing web applications, mobile applications, and experimental projects.",
  }
};

const themeInitScript = `
  (function() {
    try {
      var theme = localStorage.getItem('color-scheme');
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) {
          meta.content = theme;
        }
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${bricolage.variable} ${publicSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { CursorGlow } from "@/components/Atmosphere";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Prateek Porwal — Senior Backend Engineer",
    template: "%s · Prateek Porwal",
  },
  description:
    "Senior Backend Engineer building scalable cloud-native systems with Node.js, AWS Serverless, Docker, ECS Fargate, DynamoDB, and distributed architectures.",
  metadataBase: new URL("https://prateekporwal.vercel.app"),
  openGraph: {
    title: "Prateek Porwal — Senior Backend Engineer",
    description:
      "Cloud-native backends, serverless systems, and AI-integrated platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Porwal — Senior Backend Engineer",
    description:
      "Cloud-native backends, serverless systems, and AI-integrated platforms.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-ink text-paper">
        <div className="noise" aria-hidden />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

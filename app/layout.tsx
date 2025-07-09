import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Bitter, Montserrat } from "next/font/google";
import { Nav, Footer } from "../modules";
import "./globals.css";

const bitter = Bitter({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-bitter",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Student Leader Elections at Cal State LA",
  description:
    "If you are interested in getting involved on campus and want to make a difference, running for office is the perfect chance to help get your voice heard. As a part of student government, students can network, gain leadership experience, and be the voice for students. If elected, you will be able to help the students of Cal State Los Angeles and assist with essential changes on campus.",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: { "en-US": "/en-US" },
  },
  openGraph: {
    images: "/sle-header.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${montserrat.variable} overscroll-none`}
    >
      <body>
        <Nav />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}

import { Analytics } from "@vercel/analytics/react";
// import ReactGA from "react-ga4";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`);
  return (
    <html lang="en">
      <body className={`${bitter.variable} ${montserrat.variable}`}>
        <Nav />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}

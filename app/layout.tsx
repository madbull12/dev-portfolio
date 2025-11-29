import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GridBgLayout from "@/components/layouts/grid-bg-layout";
import { Header } from "@/components/layouts/header";
import PageContainer from "@/components/layouts/page-container";
import TargetCursor from "@/components/TargetCursor";
import { FloatingDockWrapper } from "@/components/layouts/floating-dock-wrapper";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrian Lysander | Frontend Developer",
  description:
    "Explore Andrian Lysander's portfolio – a skilled Frontend Developer specializing in Next.js, React, and modern web technologies. Showcasing innovative projects, UI/UX expertise, and high-performance web applications.",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Mobile Developer",
    "Andrian Lysander's Portfolio",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Nest js",
    "Node js",
    "Modern Web Technologies",
  ],
  openGraph: {
    title: "Andrian Lysander | Frontend Developer",
    description:
      "Discover Andrian's expertise in Frontend Development, React, and Next.js. View projects, case studies, and technical skills.",
    url: "https://kinhdev.id.vn",
    type: "website",
    images: [
      {
        url: "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
        width: 1200,
        height: 630,
        alt: "Andrian Lysander - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrian Lysander | Frontend Developer Portfolio",
    description:
      "Explore Andrian Lysander's frontend projects and expertise in React, Next.js, and modern web development.",
    images: [
      "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <ThemeProvider attribute="class">
          <TargetCursor spinDuration={2} />

          <GridBgLayout>
            <PageContainer>
              <Header />
              {children}
              <Footer />
              <FloatingDockWrapper />
            </PageContainer>
          </GridBgLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

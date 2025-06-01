
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: "A personal portfolio website showcasing skills, projects, and experience.",
  keywords: "portfolio, data analytics, machine learning, AI, web developer, personal website",
  authors: [{ name: "Your Name" }], // Replace with your name
  // Add more SEO meta tags as needed
  // openGraph: {
  //   title: APP_NAME,
  //   description: "My Personal Portfolio",
  //   images: [{ url: '/og-image.png' }], // Add an OG image
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: APP_NAME,
  //   description: "My Personal Portfolio",
  //   images: ["/twitter-image.png"], // Add a Twitter image
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning={true}>
      <body className="antialiased font-sans flex flex-col min-h-screen bg-background text-foreground" suppressHydrationWarning={true}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

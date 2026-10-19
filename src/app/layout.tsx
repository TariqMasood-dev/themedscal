import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MedScale | Growth for Aesthetic Practices",
    template: "%s | MedScale",
  },
  description:
    "Strategic social media marketing, professional video editing, and AI video generation for med spas and aesthetic clinics.",
  icons: {
    icon: "/medscale.png",
    apple: "/medscale.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased" data-theme="dark">
      <body className="relative min-h-screen overflow-x-clip bg-[var(--theme-page)] text-slate-100">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-emerald-300 px-4 py-3 text-slate-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

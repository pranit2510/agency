import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "9thGen Labs - Next-Gen AI Solutions",
  description: "Empowering businesses with cutting-edge AI solutions for automation, cost reduction, and increased efficiency.",
  keywords: ["AI", "Machine Learning", "Automation", "Data Analytics", "Consulting", "Training"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          <CustomCursor />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

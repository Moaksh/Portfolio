import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title: "Moaksh KakKar",
  description:
    "Hi, I am Moaksh Kakkar, a dedicated individual with a relentless passion for learning and growth. Driven by curiosity and a thirst for knowledge, I approach every opportunity with enthusiasm and a commitment to excellence. With a solid foundation in programming languages and cutting-edge technologies, I thrive in dynamic environments where I can apply my skills to solve complex problems and drive innovation. My goal is to continuously expand my horizons, embrace challenges, and make a positive impact in the world of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

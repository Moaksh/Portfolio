import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata: Metadata = {
  title: "Moaksh Kakkar",
  description:
    "Hi, I am Moaksh Kakkar, a dedicated individual with a relentless passion for learning and growth. Driven by curiosity and a thirst for knowledge, I approach every opportunity with enthusiasm and a commitment to excellence. With a solid foundation in programming languages and cutting-edge technologies, I thrive in dynamic environments where I can apply my skills to solve complex problems and drive innovation. My goal is to continuously expand my horizons, embrace challenges, and make a positive impact in the world of technology.",
  keywords: [
    "Moaksh Kakkar",
    "Moaksh",
    "Kakkar",
    "Moaksh Kakkar Portfolio",
    "Moaksh Kakkar Resume",
    "Moaksh Kakkar Blog",
    "Moaksh Kakkar LinkedIn",
    "Moaksh Kakkar GitHub",
    "Moaksh Kakkar Twitter",
    "Moaksh Kakkar Instagram",
    "Moaksh Kakkar Facebook",
    "Moaksh Kakkar YouTube",
    "Moaksh Kakkar TikTok",
    "Moaksh Kakkar Medium",
    "Moaksh Kakkar HackerRank",
    "Moaksh Kakkar LeetCode",
    "Moaksh Kakkar CodeChef",
    "Moaksh Kakkar Codeforces",
    "Moaksh Kakkar HackerEarth",
    "Moaksh Kakkar GeeksForGeeks",
    "Moaksh Kakkar TopCoder",
    "Moaksh Kakkar HackerRank",
    "Moaksh Kakkar LeetCode",
    "Moaksh Kakkar CodeChef",
    "Moaksh Kakkar Codeforces",
    "Moaksh Kakkar HackerEarth",
    "mokshkakkar",
    "moakshkakkarportfolio",
    "moakshkakkarresume",
    "moakshkakkarblog",
    "moakshkakkarlinkedin",
    'moksh kakkar',
  ]
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

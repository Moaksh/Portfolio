import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moaksh Kakar",
  description:
    "Moaksh Kakkar is a full-stack AI developer with a passion for creating innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { SiteGate } from "./_components/site-gate";
import "./globals.css";

export const metadata: Metadata = {
  title: "AeroTarot",
  description: "Tarot, reimagined through technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteGate>{children}</SiteGate>
      </body>
    </html>
  );
}

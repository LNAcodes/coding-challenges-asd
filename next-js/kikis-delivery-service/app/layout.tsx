import type { Metadata } from "next";
import { Geist, Geist_Mono, Cherry_Bomb_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cherryBomb = Cherry_Bomb_One({
  weight: "400",
  variable: "--font-cherry-bomb-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiki's Delivery Service",
  description: "Fast, reliable deliveries across the city.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cherryBomb.variable}`}
    >
      <body>
        <header>
          <h1 style={{ fontFamily: "var(--font-cherry-bomb-one)" }}>
            Kiki's Delivery Service
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}

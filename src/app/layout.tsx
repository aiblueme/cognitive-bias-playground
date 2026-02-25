import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Cognitive Bias Playground",
  description:
    "20 cognitive shortcuts that systematically warp your reality. Understand the mechanism. Acquire the fix.",
  keywords: [
    "cognitive bias",
    "confirmation bias",
    "dunning kruger",
    "sunk cost fallacy",
    "mental models",
    "critical thinking",
    "psychology",
  ],
  openGraph: {
    title: "The Cognitive Bias Playground",
    description:
      "20 cognitive shortcuts that systematically warp your reality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="font-body antialiased bg-carbon text-offwhite min-h-screen">
        {children}
      </body>
    </html>
  );
}

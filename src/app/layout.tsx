import type { Metadata } from "next";
import { Quicksand, Fredoka, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizons Crux | Hack Club Flagship Hackathon | Sydney, July 10–12, 2026",
  description:
    "A free 48 hour hackathon in Sydney, Australia for high school builders aged 13–18. July 10–12, 2026. Flights, accommodation, and meals fully covered.",
  icons: {
    icon: "/art/icon.png",
    shortcut: "/art/icon.png",
    apple: "/art/icon.png",
  },
  openGraph: {
    title: "Horizons Crux | Hack Club Flagship Hackathon | Sydney, July 10–12, 2026",
    description:
      "A free 48 hour hackathon in Sydney, Australia for high school builders aged 13–18.",
    url: "https://crux.hackclub.com",
    siteName: "Horizons Crux",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${fredoka.variable} ${jetbrainsMono.variable} dark antialiased`}
    >
      <body className="min-h-full bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

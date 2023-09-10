import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const title =
  "Meta Toolkit — Preview how your webpage will look on social media";
const description =
  "With Meta Toolkit you can preview how your webpage will look on Twitter, Facebook, Twitter, Linkedin and more!";
const url = new URL("https://meta-toolkit.vercel.app");

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url.href,
    type: "website",
    siteName: "Meta Toolkit",
  },
  twitter: {
    title: title,
    description: description,
    card: "app",
  },
  applicationName: "Meta Toolkit",
  authors: [
    {
      name: "Sonu Sharma",
      url: "https://twitter.com/thealphamerc",
    },
  ],
  category: "meta",
  colorScheme: "light dark",
  abstract: "Preview how your webpage will look on social media",
  keywords: ["meta", "preview", "social media", "twitter", "facebook"],
  metadataBase: url,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

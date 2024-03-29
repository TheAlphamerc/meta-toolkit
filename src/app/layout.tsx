import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GTagScript from "./(component)/gtag-script";

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
    card: "summary_large_image",
  },
  applicationName: "Meta Toolkit",
  authors: [
    {
      name: "Sonu Sharma",
      url: "https://twitter.com/thealphamerc",
    },
  ],
  colorScheme: "light",
  abstract: "Preview how your webpage will look on social media",
  keywords: ["meta", "preview", "social media", "twitter", "facebook"],
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GTagScript />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

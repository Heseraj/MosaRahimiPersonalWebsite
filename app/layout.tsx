import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mosarahimi.com"),
  title: {
    default: "Mosa Rahimi — Operations Leadership in Aerospace Manufacturing",
    template: "%s · Mosa Rahimi",
  },
  description:
    "Wharton MBA, Harvard MPA, and aerospace manufacturing operations leader—two decades scaling complex, high-stakes systems, with applied AI and data science sharpening the work rather than replacing it.",
  keywords: [
    "Mosa Rahimi",
    "operations leadership",
    "aerospace manufacturing",
    "satellite manufacturing",
    "chief of staff",
    "executive advisory",
    "strategy",
    "Wharton MBA",
    "Harvard MPA",
    "artificial intelligence",
    "data science",
  ],
  authors: [{ name: "Mosa Rahimi" }],
  openGraph: {
    title: "Mosa Rahimi — Operations Leadership in Aerospace Manufacturing",
    description:
      "Two decades scaling complex operations under pressure—from national security institutions to satellite manufacturing—with applied AI as a sharpening tool, not a departure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosa Rahimi — Operations Leadership in Aerospace Manufacturing",
    description:
      "Experience taught me how complex systems behave under pressure. I build and scale them—in aerospace manufacturing, with AI as part of the toolkit.",
  },
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

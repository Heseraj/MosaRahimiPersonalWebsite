import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mosarahimi.com"),
  title: {
    default: "Mosa Rahimi — Learning How Machines Learn",
    template: "%s · Mosa Rahimi",
  },
  description:
    "Wharton MBA, Harvard MPA, and Amazon operations leader deliberately building at the intersection of artificial intelligence, data science, finance, and policy.",
  keywords: [
    "Mosa Rahimi",
    "artificial intelligence",
    "AI policy",
    "data science",
    "machine learning",
    "operations leadership",
    "strategy",
    "Wharton MBA",
    "Harvard MPA",
  ],
  authors: [{ name: "Mosa Rahimi" }],
  openGraph: {
    title: "Mosa Rahimi — Now I'm learning how machines learn.",
    description:
      "Two decades in operations, policy, and strategy—and a deliberate move toward artificial intelligence, data science, and the problems at that frontier.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosa Rahimi — The deliberate pivot to AI",
    description:
      "Experience taught me how systems behave. Now I'm learning how machines learn.",
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

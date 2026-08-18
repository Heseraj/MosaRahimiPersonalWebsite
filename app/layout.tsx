import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mosarahimi.com"),
  title: {
    default: "Mosa Rahimi — Operator, Strategist, Builder",
    template: "%s · Mosa Rahimi",
  },
  description:
    "Wharton MBA, Harvard MPA, and Amazon operations leader working at the boundary of complex systems, policy, and human-scale coordination.",
  keywords: [
    "Mosa Rahimi",
    "operations leadership",
    "strategy",
    "artificial intelligence",
    "Wharton MBA",
    "Harvard MPA",
  ],
  authors: [{ name: "Mosa Rahimi" }],
  openGraph: {
    title: "Mosa Rahimi — Complex systems. Human outcomes.",
    description:
      "Twenty years across public service, policy, technology, and operations—and a deliberate move toward the frontier of AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosa Rahimi — Operator, Strategist, Builder",
    description: "Complex systems. Human outcomes.",
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

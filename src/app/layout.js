import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
});

export const metadata = {
  title: "Bahay Kubo Early Learning Centre",
  description:
    "Bahay Kubo Early Learning Centre is a warm, home-based daycare in Hamilton, Ontario, welcoming children aged 18 months to 5 years. We provide a safe, nurturing environment where kids can play, learn, and thrive through structured routines, engaging activities, and caring guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} antialiased`}>{children}</body>
    </html>
  );
}

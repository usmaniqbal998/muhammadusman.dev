import "./globals.css";
import { Heebo } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Muhammad Usman",
  description: "muhammadusman.dev Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={heebo.className}>
      <body>{children}</body>
    </html>
  );
}

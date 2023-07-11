import "./globals.css";
import Avatar from "@/components/avatar";
import Nav from "@/components/nav";
import { Metadata } from "next";
import { Heebo } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadusman.dev"),
  title: {
    default: "Muhammad Usman",
    template: "%s | Muhammad Usman",
  },
  description: "Frontend enthusiast, writer, and creator.",
  openGraph: {
    title: "Muhammad Usman",
    description: "Frontend enthusiast, writer, and creator.",
    url: "https://muhammadusman.dev",
    siteName: "Muhammad Usman",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://muhammadusman.dev/sticker.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={heebo.className}>
      <body className="mt-8 max-w-3xl antialiased sm:mx-auto">
        <main className="min-w-0 px-6 md:px-0">
          <Nav />
          <Avatar />
          {children}
        </main>
        <footer>
          <div className="mb-10 text-center text-text">
            <p>Copyright 2023 - Muhammad Usman</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

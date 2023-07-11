import "./globals.css";
import Avatar from "@/components/avatar";
import Nav from "@/components/nav";
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

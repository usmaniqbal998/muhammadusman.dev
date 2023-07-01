import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

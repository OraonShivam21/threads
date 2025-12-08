import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thread",
  description: "Meta's Threads Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

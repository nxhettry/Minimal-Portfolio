import type { Metadata } from "next";
import "./globals.css";
import { BackgroundLines } from "@/components/ui/background-lines";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Minimalist portfolio",
  description: "Nisshan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-body w-3/5 mx-auto`}>
        <BackgroundLines>
          <Navbar />
          <div className="py-20 h-full w-full">{children}</div>
        </BackgroundLines>
      </body>
    </html>
  );
}

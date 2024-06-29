import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import "../styles/playbutton.css";
import "../styles/confirmation-animation.css";
import "../styles/embla-carousel.css";
import Providers from "@/providers";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers attribute="class" defaultTheme="system">
          {children}
        </Providers>
      </body>
    </html>
  );
}

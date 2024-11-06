import type { Metadata } from "next";
//import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/
const font = Poppins(
  { subsets: ["latin"],
    weight: '400'
});

export const metadata: Metadata = {
  title: "MTechnology - Create, grow and scale your business",
  description: "Generated by create next app",
  icons: {
    icon: "/logo/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {font.className}>
        {children}
      </body>
    </html>
  );
}
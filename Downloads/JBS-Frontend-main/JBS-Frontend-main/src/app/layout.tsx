import "@splidejs/splide/dist/css/splide.min.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const artifaktElement = localFont({
  src: [
    {
      path: "./fonts/Artifakt-Element-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Artifakt-Element-Black-Italic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Artifakt-Element-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Artifakt-Element-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Artifakt-Element-Book-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Artifakt-Element-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Artifakt-Element-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Artifakt-Element-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Artifakt-Element-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Artifakt-Element-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Artifakt-Element-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Artifakt-Element-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Artifakt-Element-Thin-Italic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-artifakt-element", // Define the CSS variable
});

export const metadata: Metadata = {
  title: "JBS Consulting",
  description: "Work Better. Technology is good, using it for good is better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={artifaktElement.variable}>
      <body className=" ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import MainLayout from "@/components/layouts";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/index.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: {
    default: "CamTuner",
    template: "%s - CamTuner",
  },
  description:
    "Cam Tuner gives you complete control over your webcam settings. Adjust brightness, contrast, saturation and more with just a few clicks.",
};

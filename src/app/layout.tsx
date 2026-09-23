import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Switchgears Pvt Ltd | Engineering Reliable Power Solutions",
  description:
    "Manufacturers of premium electrical control panels — MCC, PCC, APFC, Fire Fighting, Synchronizing & PLC Automation panels — trusted by industries across India since 1994.",
  keywords: [
    "Creative Switchgears",
    "MCC Panels",
    "PCC Panels",
    "APFC Panels",
    "PLC Automation Panels",
    "Synchronizing Panels",
    "Fire Fighting Panels",
    "electrical control panels India",
    "industrial switchgear manufacturer",
  ],
  authors: [{ name: "Creative Switchgears Pvt Ltd" }],
  openGraph: {
    title: "Creative Switchgears Pvt Ltd",
    description:
      "Engineering reliable power solutions. Premium electrical control panel manufacturers since 1994.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

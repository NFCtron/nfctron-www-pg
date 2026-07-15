import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NFCtron — Akce, vstupenky a bezstarostné placení",
  description: "Objevte festivaly, koncerty, sportovní a další akce. Kupte vstupenky a mějte platby i vrácení kreditu v jednom NFCtron účtu.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NFCtron — To nejlepší se děje právě teď",
    description: "Akce, vstupenky, platby a vrácení kreditu v jednom NFCtron účtu.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

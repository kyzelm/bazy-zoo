import type {Metadata} from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Zoo - administracja",
  description: "Zarządzaj infrastrukturą zoo",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
    <body>
    {children}
    </body>
    </html>
  );
}

import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";

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
    <NavBar/>
    {children}
    </body>
    </html>
  );
}

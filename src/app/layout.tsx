import type { Metadata } from "next";
import "./globals.css";
import Favicon from "./favicon.ico";

export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "Tienda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

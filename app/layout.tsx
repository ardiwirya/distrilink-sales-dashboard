import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Distrilink SAP - Dashboard Analisa Performa Salesman",
  description:
    "Dashboard analisa performa kunjungan dan order harian tim sales Distrilink SAP.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

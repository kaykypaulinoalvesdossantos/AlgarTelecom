import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Algar Telecom",
  description: "Parceiro autorisado Algar Telecom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}

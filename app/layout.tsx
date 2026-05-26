import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.CUSTOM_DOMAIN
  ? `https://${process.env.CUSTOM_DOMAIN}`
  : "https://freelanortemt.github.io/CristianeElias";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cristiane Elias | Consultora de Beleza em Sinop - MT",
  description:
    "Maquiagem profissional, cursos, sobrancelhas e consultoria de beleza em Sinop - MT com Cristiane Elias, especialista há 18 anos em beleza prática e elegante.",
  keywords: [
    "Cristiane Elias",
    "maquiagem em Sinop",
    "consultora de beleza",
    "maquiagem social",
    "auto maquiagem",
    "brow lamination",
    "sobrancelhas"
  ],
  openGraph: {
    title: "Cristiane Elias | Beleza prática, elegante e sofisticada",
    description:
      "Atendimento personalizado em maquiagem, sobrancelhas, cursos e consultoria de beleza em Sinop - MT.",
    images: ["/images/cliente-soft-glam-01.jpg"],
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

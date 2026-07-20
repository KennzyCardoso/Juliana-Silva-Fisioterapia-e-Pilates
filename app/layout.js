import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://jsfisioterapiaepilates.vercel.app"),
  title: "Juliana Silva Fisioterapia e Pilates | Castanhal - PA",
  description:
    "Juliana Silva Fisioterapia e Pilates - Studio em Castanhal/PA. Fisioterapia traumato-ortopédica, desportiva, geriátrica, Pilates, Mat Pilates e mais. Agende sua avaliação.",
  openGraph: {
    title: "Juliana Silva Fisioterapia e Pilates",
    description:
      "Fisioterapia e Pilates em Castanhal/PA, com atendimento individualizado no Centro da cidade.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

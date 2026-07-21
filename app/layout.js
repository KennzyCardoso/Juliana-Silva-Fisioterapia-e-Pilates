import { Fraunces, Inter } from "next/font/google";
import { studio } from "@/data/studio";
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
  metadataBase: new URL("https://www.jsfisioterapiaepilates.com.br"),
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "ExerciseGym"],
  name: `${studio.name} ${studio.brand}`,
  image: "https://www.jsfisioterapiaepilates.com.br/logo-juliana-silva.png",
  url: "https://www.jsfisioterapiaepilates.com.br",
  telephone: `+${studio.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Cel. Leal, 953 - Centro",
    addressLocality: "Castanhal",
    addressRegion: "PA",
    postalCode: "68743-070",
    addressCountry: "BR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "19:00",
  },
  sameAs: [studio.instagram],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

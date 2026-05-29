import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata = {
  metadataBase: new URL('https://osekunde.pl'),
  title: "osekunde - Taxi Włodawa | Przewóz Osób Włodawa-Okuninka | Transfery Lotniskowe | Bus 8 osób",
  description: "Bezpieczny i komfortowy transport osób busem 8-osobowym we Włodawie. Obsługujemy wesela, wycieczki i transfery na lotniska. Sprawdź najlepszy transport z osekunde!",
  keywords: [
    "taxi włodawa", "taxi wlodawa",
    "osekunde", "osekunde taxi", "o sekunde",
    "przewóz osób włodawa", "przewoz osob wlodawa",
    "taxi okuninka", "bus okuninka",
    "bus 8 osób włodawa", "bus 8 osob wlodawa",
    "transfery lotniskowe włodawa", "transfery lotniskowe wlodawa",
    "wynajem busa włodawa", "wynajem busa wlodawa",
    "taxi lublin włodawa", "taxi lublin wlodawa",
    "przewóz osób okuninka", "transport wlodawa",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "osekunde - Taxi Włodawa | Przewóz Osób Włodawa-Okuninka",
    description: "Bezpieczny i komfortowy transport osób busem 8-osobowym we Włodawie. Obsługujemy wesela, wycieczki i transfery na lotniska.",
    url: 'https://osekunde.pl',
    siteName: 'osekunde',
    images: [
      {
        url: '/busprzod.jpg',
        width: 1200,
        height: 630,
        alt: 'Bus osekunde - widok z przodu',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  icons: {
    icon: "/taxi.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

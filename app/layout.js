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
  title: "Stenbor - Taxi Włodawa | Przewóz Osób Włodawa-Okuninka | Transfery Lotniskowe | Bus 8 osób",
  description: "Bezpieczny i komfortowy transport osób busem 8-osobowym we Włodawie. Obsługujemy wesela, wycieczki i transfery na lotniska. Sprawdź najlepszy tor ze Stenbor!",
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

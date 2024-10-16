import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SolveHub",
  description: "Generated by create next app",
  openGraph: {
    image: "https://favicon.im/solvehub.in", // URL to your image
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-montserrat ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar>
          {children}
        </Navbar>
      </body>
    </html>
  );
}

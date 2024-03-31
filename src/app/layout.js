import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/common/Nav";
import Footer from "@/components/common/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mentorship for Acceleration (M4ACE)",
  description:
    "Embark on Your Tech Journey: Register for our curated FREE training courses and get the right Mentorship, Tools and Content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${"${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"});
          `}
        </Script>
        <meta
          name="keywords"
          content="mentorship, tech transitioning, m4ace, cloudcomputing"
        />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={`${rubik.className} overflow-x-hidden `}>
        <Nav />
        {children}
      </body>
      <Footer />
    </html>
  );
}

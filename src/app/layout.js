import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/common/Nav";

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
        <meta
          name="keywords"
          content="mentorship, tech transitioning, m4ace, cloudcomputing"
        />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={rubik.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

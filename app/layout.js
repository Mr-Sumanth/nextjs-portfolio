import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        <div className=" min-h-[98.7vh] inset-0 -z-10 h-full w-full items-center px-5 py-28 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
       
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}

// export default function Layout({ children }: { children: React.ReactNode }) {
//     return (
//         <div>{children}</div>
//     );
//   }


import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import { Navbar } from "../../components/NavBar";
import ContextProvider from "../../components/SideNav/context-provider";
import SideNav from "../../components/SideNav/side-nav";
import AuthProvider from "@/context/AuthProvider";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400","700"] });

export const metadata: Metadata = {
  title: "MarketPlace Platform",
  description: "Powered By Watoto Church",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en" className="!scroll-smooth">
    
      <body className={`${poppins.className} text-slate-700`}>
        <Navbar/>
        <AuthProvider>{children}</AuthProvider>
    
      </body>
    </html>
  );
}

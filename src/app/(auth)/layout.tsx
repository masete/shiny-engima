import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ToasterContext from "@/context/ToasterContext";
import AuthProvider from "@/context/AuthProvider";
// import { ReduxProvider } from "@/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Marketplace",
  description: "Auth Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* <ReduxProvider> Wrap Redux Provider */}
          <AuthProvider>
            {/* <ToasterContext /> */}
            {children}
          </AuthProvider>
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}

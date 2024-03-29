import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Observer",
  description: "objection detection",
};

import Layout from "./components/Layout";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}

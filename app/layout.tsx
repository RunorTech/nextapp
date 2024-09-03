export const dynamic = 'force-dynamic'
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PageProvider } from "./pageContext";


const poppins = Poppins({
  subsets: ['latin'],
  weight: [ "100", '200' , '300',  '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Tech Store",
  description: "all about tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <PageProvider>
      {children}
      </PageProvider>
      </body>
    </html>
  );
}

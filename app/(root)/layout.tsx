
import Image from "next/image";
import { redirect } from "next/navigation";
import NavLinks from "../ui/nav-links";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className="flex h-screen w-full font-inter">
        <NavLinks/>
        {children}
    </main>
  );
}
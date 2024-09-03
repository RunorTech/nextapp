
import Image from "next/image";
import { redirect } from "next/navigation";
import { NavbarDemo } from "../ui/NavBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className="flex h-screen w-full font-inter">
<NavbarDemo/>
        {children}
    </main>
  );
}
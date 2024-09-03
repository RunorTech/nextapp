
import Image from "next/image";
import { redirect } from "next/navigation";
import { NavbarDemo } from "../ui/NavBar";
import { SidebarDemo } from "../ui/SideBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <>
      {/* <NavbarDemo /> */}
    
      <SidebarDemo/>
      {children}
    </>
  );
}
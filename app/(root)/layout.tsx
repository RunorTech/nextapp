
import { SidebarDemo } from "../ui/SideBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <>
      <SidebarDemo/>
      {children}
    </>
  );
}
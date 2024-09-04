"use client"
import Image from "next/image";
import { useEffect } from "react";
import { NavbarDemo } from "../ui/NavBar";
import { usePageContext } from "../pageContext";
import { ScrollArea } from "@/components/ui/scroll-area"
import Hero from "./components/Hero";


export default function Home() {
  const { content, setContent } = usePageContext();
  return (
    <>
      {useEffect(() => {
        setContent(<div className="dashboard-body">
          <NavbarDemo />
          <ScrollArea className="h-[100vh] w-[100vw]">
            work in progresss
          </ScrollArea>
        </div>)
      }, [])}
    </>
  );
}

"use client"
import Image from "next/image";
import { useEffect } from "react";
import { NavbarDemo } from "../ui/NavBar";
import { usePageContext } from "../pageContext";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Home() {
  const { content , setContent} = usePageContext();
  return (   
    <>
    { useEffect(() => {
    setContent( <div className="dashboard-body-home">
      <NavbarDemo/> 
       <ScrollArea className="h-[100vh] w-[100vw]">
       
        </ScrollArea>
      </div>)
},[])}
    </>
  );
}

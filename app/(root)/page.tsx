"use client"
import Image from "next/image";
import { useEffect } from "react";
import { NavbarDemo } from "../ui/NavBar";
import { usePageContext } from "../pageContext";

export default function Home() {
  const { content , setContent} = usePageContext();
  return (   
    <>
    { useEffect(() => {
    setContent( <div className="dashboard-body">
      <NavbarDemo/>
        
       <h1>Home page</h1>
      </div>)
},[])}
    </>
  );
}

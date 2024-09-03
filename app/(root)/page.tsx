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
       <h1>Home page Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fuga sapiente quam illo velit recusandae totam labore unde, suscipit debitis aspernatur sed doloribus, a ipsam atque sit dolores cupiditate consectetur.</h1>
      </div>)
},[])}
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import HomeIcon from '@mui/icons-material/Home';
import { usePageContext } from "../pageContext";
import BookIcon from '@mui/icons-material/Book';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <HomeIcon className="my-main-text h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Developer profile",
      href: "#",
      icon: (
        <CodeRoundedIcon className="my-main-text h-5 w-5 flex-shrink-0" />
      
      ),
    },
    {
      label: "Use Note project",
      href: "#",
      icon: (
        <EditNoteRoundedIcon className="my-main-text h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Job Request",
      href: "#",
      icon: (
        <SendRoundedIcon className="my-main-text h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Blog",
      href: "/blog",
      icon: (
        <BookIcon className="my-main-text h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Game",
      href: "/game",
      icon: (
        <SportsEsportsIcon className="my-main-text h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <><Logo/></> : <LogoIcon /> }
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Sign In",
                href: "#",
                icon: (
                  <Image
                    src=""
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 icon-menu-logo rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium my-main-text whitespace-pre"
      >
        RUNOR
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 icon-menu-logo rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
 export const Dashboard = () => {
    const { content , setContent} = usePageContext();
  return (
    <>
    {content}
    </>
  );
};

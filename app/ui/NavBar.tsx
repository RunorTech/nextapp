"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
      <Navbar className="nav-bar" />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("inset-x-0 div-nav-w mx-auto z-50", className)}
    >
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col  space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-rows-2 gap-10">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src=""
              description="Prepare for tech interviews like never before."
            />
              <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src=""
              description="Prepare for tech interviews like never before."
            />
              <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src=""
              description="Prepare for tech interviews like never before."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

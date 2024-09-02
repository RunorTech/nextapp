import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toggleMenu = () => {
  const navMenu: HTMLElement | null = document.getElementById('mobile-nav');
  console.log(navMenu)
  navMenu?.classList.toggle("show-menu");

}
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toggleMenu = () => {
  const navMenu: HTMLElement | null = document.getElementById('mobile-nav');
  navMenu?.classList.toggle("show-menu");
}
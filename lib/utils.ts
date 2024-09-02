import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toggleMenu = () => {
  const navMenu: HTMLElement | null = document.getElementById('mobile-nav');
  navMenu?.classList.toggle("show-menu");
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('nav-bar')
  // Add a class if the bottom offset is greater than 50 of the viewport
  // this.offsetY >= 50 ? header.classList.add('scroll-header') 
  //                    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
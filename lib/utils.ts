import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const toggleMenu = () => {
  console.log("menu")
}

 export const changeCard = () => {
  const cardFlip = document.getElementById('card');
  cardFlip?.classList.toggle("active");
  };
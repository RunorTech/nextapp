import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import api from "./axios"
import { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const toggleMenu = () => {
  console.log("menu")
}

export const changeCard = () => {
  const cardFlip = document.getElementById('card');
  cardFlip?.classList.add("active");
};
export const toggleCard = () => {
  const cardFlip = document.getElementById('card');
  cardFlip?.classList.remove("active");
}

export const checkDataFlipCard = async (task : string) => {
  let checked = null;
  const result = await apiRequest(task);
  checked = result;
  checked ? changeCard() : null;
  return checked;
}

export const fetchData = async () => {
  try {
    const response = await fetch('https://game-truth-or-dare.onrender.com/dare/random', { method: 'GET' }); // Adjust the endpoint as needed
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const apiRequest = async (task : string) => {
  const API_URL = "https://game-truth-or-dare.onrender.com";
  try {
    const response = await axios.get(API_URL + task);
    const result = response.data;
    console.log(result)
    return result;
  } catch (error) {
    console.log('Error fetching data:', error);
  }
 
 

}
interface ApiResponseTruth {
  // Define the structure of the response data here
  // For example:
  // data: string;
  id: number,
  question: string,
  type: string
}
interface ApiResponseDare {
  id: number,
  dare: string,
  type: string
}
// export  async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponseTruth | { error: string }| ApiResponseDare>)  {
//   try {
//     const response = await api.get('/endpoint'); // Replace '/endpoint' with your API endpoint
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }
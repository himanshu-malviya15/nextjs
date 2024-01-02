import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchData = async () => {
  const response = await fetch("http://localhost:4000/items"); 
  const data = await response.json();
  return data;
};

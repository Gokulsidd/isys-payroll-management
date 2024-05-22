import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const searchResults = (string : string, array : string[]) => {
  const searchResults = array.filter((item: string) => item.includes(string))
  return searchResults
  
}
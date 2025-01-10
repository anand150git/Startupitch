import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string) => {

  // implementation of formatDate function

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return new Date(date).toLocaleDateString(undefined, options);

}; 

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

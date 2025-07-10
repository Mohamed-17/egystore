import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

{
  /* convert the data to plain js */
}
export function convertData<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// formate the price

export const formatter = (value: number): string => {
  const [int, float] = value.toString().split(".");
  return float ? `${int}.${float.padEnd(2, "0")}` : `${int}.00`;
};

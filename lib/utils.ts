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

export function formateError(error: any) {
  if (error.name === "ZodError") {
    const parsed = JSON.parse(error.message);
    return parsed.map((err: any) => err.message).join(", ");
  }
  if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    return "Email already exists";
  }
}

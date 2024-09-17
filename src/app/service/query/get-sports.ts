"use server";
import { Product } from "../types/phones";

const url = process.env.APP_URL;

export const getSports = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${url}/sport`);
    const newdata = await res.json();
    return newdata;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

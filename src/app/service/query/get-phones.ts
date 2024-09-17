"use server";
import { Phones } from "../types/phones";

const url = process.env.APP_URL;

export const getPhones = async (): Promise<Phones[]> => {
  try {
    const res = await fetch(`${url}/phones`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

"use server";
import { Computers } from "../types/phones";

const url = process.env.APP_URL;

export const getComputers = async (): Promise<Computers[]> => {
  try {
    const res = await fetch(`${url}/computers`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

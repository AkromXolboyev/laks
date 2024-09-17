"use server";
import { Stearing } from "../types/phones";

const url = process.env.APP_URL;

export const getStearing = async (): Promise<Stearing[]> => {
  try {
    const res = await fetch(`${url}/steeringWheel`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

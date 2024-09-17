// "use server";

// const url = process.env.APP_URL;

// interface CaruselType {
//   img: string;
//   id: number;
// }

// export const GetCarusel = async (): Promise<CaruselType[]> => {
//   try {
//     const res = await fetch(`${url}/banners`);

//     if (!res.ok) {
//       throw new Error(`Failed to fetch data, status: ${res.status}`);
//     }

//     const data: CaruselType[] = await res.json();
    
//     return data;
//   } catch (error) {
//     throw new Error(`Error fetching carusel data: ${(error as Error).message}`);
//   }
// };

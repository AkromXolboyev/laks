// // pages/api/products.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Product } from '@/components/product-list';

// export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
//   const products: Product[] = [
//     { id: 1, name: 'Product 1', price: '$10' },
//     { id: 2, name: 'Product 2', price: '$20' },
//     { id: 3, name: 'Product 3', price: '$30' },
//   ];

//   res.status(200).json(products);
// }

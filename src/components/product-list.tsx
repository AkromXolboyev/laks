// // types/Product.ts
// export interface Product {
//     id: number;
//     name: string;
//     price: string;
//   }
  
//   // components/ProductList.tsx
//   import { useEffect, useState } from 'react';
//   import ProductItem from '@/app/product-item/page';
  
  
//   export default function ProductList() {
//     const [products, setProducts] = useState<Product[]>([]);
  
//     // Fetch products from backend
//     useEffect(() => {
//       const fetchProducts = async () => {
//         try {
//           const response = await fetch('https://market-backend-zeta.vercel.app'); // Backend URL
//           const data: Product[] = await response.json(); // Explicitly typing data
//           setProducts(data);
//         } catch (error) {
//           console.error('Error fetching products:', error);
//         }
//       };
  
//       fetchProducts();
//     }, []);
  
//     return (
//       <div>
//         {products.map((product) => (
//           <ProductItem key={product.id} product={product} />
//         ))}
//       </div>
//     );
//   }
  
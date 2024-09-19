// "use client";
// import { SearchIcon, ShieldAlert } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { useDebounce } from "@/hooks/useDebounce";
// import { fetchProducts } from "@/service/query/fetch"; 
// import { productTypes } from "@/service/types/types";
// import { SearchCard } from "./search-card";

// export const Search = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [products, setProducts] = useState<productTypes[]>([]);
//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const data = await fetchProducts(debouncedSearchTerm);
//         setProducts(data);
//       } catch (error) {
//         console.error("Error", error);
//       }
     
//     };
  
//     getProducts();
    
//   }, [debouncedSearchTerm]);

//   return (
//     <div className="relative">
//       <div className="flex max-w-[800px] w-full border h-[47px]  rounded-lg border-primary justify-between items-center">
       
//         <Input
//           className=""
//           placeholder="Qidirish"
//           onChange={(e) => setSearchTerm(e.target.value)}
//           value={searchTerm}
//         />
//         <Button className="rounded-l-none w-28  h-full">Filter</Button>
//       </div>

//       <div className="absolute top-11 w-full z-50">
//         {searchTerm.length === 0 ? (
//           ""
//         ) : products.length > 0 ? (
//           <div className="mt-5 h-72 z-2 grid p-3  w-full border ">
//             <div className="">
//               {products.map((product) => (
//                 <SearchCard key={product.id} {...product} />
//               ))}
//             </div>
//           </div>
//         ) : (
//           <div className="w-full bg-blue-300 border border-primary  rounded-lg p-5 text-center mt-4">
//             <p>product not find</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


"use client";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { fetchProducts } from "@/service/query/fetch";
import { productTypes } from "@/service/types/types";
import { SearchCard } from "./search-card";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<productTypes[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsModalOpen(true); // Open modal when search term is present
    } else {
      setIsModalOpen(false); // Close modal if search term is cleared
    }

    const getProducts = async () => {
      try {
        const data = await fetchProducts(debouncedSearchTerm);
        setProducts(data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    if (debouncedSearchTerm) {
      getProducts();
    }
  }, [debouncedSearchTerm]);

  // Function to clear search input and close modal
  const handleProductSelect = () => {
    setSearchTerm("");
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex max-w-[800px] w-full border h-[47px] rounded-lg border-primary justify-between items-center">
        <Input
          className=""
          placeholder="Qidirish"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <Button className="rounded-l-none w-28 h-full">Filter</Button>
      </div>

      {isModalOpen && (
        <div className="absolute top-11 w-full z-50">
          {products.length > 0 ? (
            <div className="mt-5 h-72 z-2 grid p-3 w-full border">
              <div className="">
                {products.map((product) => (
                  <SearchCard
                    key={product.id}
                    {...product}
                    clearInput={handleProductSelect} // Pass function to clear input and close modal
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full bg-blue-300 border border-primary rounded-lg p-5 text-center mt-4">
              <p>Product not found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

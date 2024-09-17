// "use client"
// import React from 'react'
// import { useDebounce } from '../hooks/usedebounce'
// import { useSearch } from '../service/query/useSearch'
// import { CategoryCard } from './category-card'
// import { useLocation } from 'react-router-dom'

// export const Search = () => {
//     const [inputValue, setInputValue] = React.useState("")
//     const debouncedValue = useDebounce(inputValue);
//     const { data } = useSearch(debouncedValue)
//     const location = useLocation();
    

//     React.useEffect(()=>{
//         setInputValue("");
//     },[location.pathname]
// )
    
//     return (
//         <div className='relativ'>
//             <div className='mb-5 flex justify-end'>
//                 <input
//                     onChange={(e) => setInputValue(e.target.value)}
//                     className='max-w-screen-sm w-full p-5 bg-blue-100 rounded-md '
//                     type="text"
//                     value={inputValue}
//                     placeholder='search' />
//             </div>
//             {inputValue.length > 3 && (
//                 <div className='absolute right-0 p-5 shadow-md max-w-screen-md w-full z-10 border-red-400 border  bg-slate-400'>
//                     {data?.map((item) => (
//                         <CategoryCard key={item.id} {...item} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

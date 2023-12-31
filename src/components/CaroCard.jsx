import React from "react";
import { Link } from "react-router-dom";

export default function CaroCard({cat}) {

  return (
    <div className="rounded-md shadow overflow-clip text-center pb-5 mr-5 mb-5 grid grid-rows-5" key={cat.id}>
      
      
      <div className="bg-blue-500 relative row-span-2 ">
        <div className="absolute top-1/3 w-full ">
          <img src={cat.image.url} alt={cat.name} className="pointer-events-none w-20 h-20 object-cover overflow-visible drop-shadow-lg mx-auto"/>

        </div>
      </div>
      <div></div>
      <div className="">
        <p className="pb-3 capitalize">{cat.name}</p>
      </div>
      
      <Link to={`/category/?query=${cat.slug}&id=${cat.id}`} className="bg-blue-500 rounded-lg w-min text-white whitespace-nowrap px-5 py-2 mx-auto">View Blogs</Link>
  
  
    </div>
  );
}
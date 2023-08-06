import React from "react";
import { Link } from "react-router-dom";

export default function CaroCard({cat}) {

  return (
    <div className="rounded-md shadow overflow-clip text-center mr-5 grid grid-rows-5" key={cat.id}>
      
      {/* <h2>{cat.name}</h2>
      <img src={cat.image.url} alt="" /> */}
      <div className="bg-blue-500 relative row-span-2">
        <div className="absolute top-1/3 w-full">
          <img src={cat.image.url} alt={cat.name} className="w-20 mx-auto"/>

        </div>
        
      </div>
      <div></div>
      <div className="">
        <p className="pt-3">{cat.name}</p>
      </div>
      
      <Link to={`/categories/${cat.slug}`} className="bg-blue-500 rounded-lg w-min text-white whitespace-nowrap px-5 py-2 mx-auto mb-2">View Blogs</Link>
    </div>
  );
}
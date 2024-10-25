import React from "react";
export default function Gallery({ images }) {

  return (
    <div className="container mx-auto p-20 bg-gray-100">
      {/* Gallery Grid */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="h-80 brightness-100     hover:brightness-100 relative overflow-hidden rounded-lg shadow-lg"> 
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

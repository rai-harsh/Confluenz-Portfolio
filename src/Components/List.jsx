import React from "react";
import { Link } from "react-router-dom"; // Import Link component

export default function List(props) {
  var text = props.genre;

  // Construct the API URL based on some ID, assuming props.id or props.location can be used
  const apiUrl = `http://localhost:5173/Photowalks/${props.id}`;

  return (
    <Link
      to={apiUrl} // Link to the API
      className="my-4 flex flex-col sm:flex-row w-9/12 lg:w-9/12 sm:w-10/12 bg-gray-300 group hover:bg-gray-900 duration-200 rounded-lg mx-auto"
    >
      {/* Image Section */}
      <div className="w-full h-80 sm:w-7/12 overflow-clip">
        <img
          src={props.source}
          className="group-hover:scale-105 w-full h-full object-cover group-hover:brightness-50 duration-200 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
          alt="yo"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full sm:w-5/12 justify-around items-center text-center p-4 sm:p-0 group-hover:text-white duration-200">
        {/* Location */}
        <div className="flex flex-row items-center gap-3 justify-center">
          <i className="fa-solid fa-location-dot fa-lg sm:fa-xl text-red-600 group-hover:text-red-400 duration-200"></i>
          <h3 className="xs:text-2xl md:text-2xl lg:text-3xl sm:text-xl text-lg font-display font-semibold md:group-hover:translate-x-4 sm:group-hover:translate-x-1 group-hover:translate-x-4 transition-transform duration-200">
            {props.location}
          </h3>
        </div>

        {/* Details (Genre and Date) */}
        <div className="mt-4 sm:mt-6">
          {/* Genre */}
          <div className="flex flex-row items-center justify-center gap-2">
            <h3 className="text-sm md:text-xl font-semibold">Genre:</h3>
            <p className="text-sm md:text-lg">{text}</p>
          </div>

          {/* Date */}
          <div className="flex flex-row items-center justify-center gap-2 sm:mt-2">
            <h3 className="text-sm md:text-xl font-semibold">Date:</h3>
            <p className="text-sm md:text-lg">{props.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

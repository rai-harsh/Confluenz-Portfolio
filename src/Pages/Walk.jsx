import React, { useEffect, useState } from "react";
import Gallery from "../Components/Gallery.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

// Parallax Cover with Smooth Scroll Effect
const ParallaxCover = ({ imageSrc }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      setIsVisible(true); // Trigger slide-in animation
    }, 500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="h-48 xs:h-56 sm:h-72 md:h-96 relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPositionY: `${-offsetY * 0.4}px`, // Smooth linear parallax effect
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1
          className={`text-3xl tracking-[0.5em] sm:text-5xl md:text-7xl text-white font-bold transition-transform duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Photowalk
        </h1>
      </div>
    </div>
  );
};

export default function Walk() {
  const { walkId } = useParams();
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    if (walkId) {
      axios
        .get(`/api/photowalk/${walkId}`)
        .then((response) => {
          console.log(response.data); 
          setItems(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [walkId]);

  const coverImage = `http://localhost:3000${items[0]?.cover_img}` || "Loading...";
  const location = items[0]?.locations || "Loading...";
  const date = items[0]?.dates?.slice(0, 10) || "Loading...";
  const description = items[0]?.description || "Loading...";

  const [isLocationVisible, setLocationVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLocationVisible(true); // Trigger location slide-in animation
    }, 700);
  }, []);

  const images = items.map((item)=>{return `http://localhost:3000${item.image_url}`});
    

  return (
    <>
      <div className="flex flex-col min-h-screen pt-10 ">
        <ParallaxCover imageSrc={coverImage} />

        <div className="flex flex-col items-center px-4 py-8 sm:py-12 max-w-screen-lg mx-auto">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 text-center transition-transform duration-700 ease-out ${
              isLocationVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {location}
          </h2>

          <p
            className={`text-md sm:text-lg md:text-xl text-gray-500 mb-4 text-center transition-transform duration-700 ease-out ${
              isLocationVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {date}
          </p>
          <div className="w-full mx-auto border-t-2 border-b-2 pb-6 border-gray-300 pt-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
      <Gallery images={images} />
    </>
  );
}

import React from "react";
import List from "../Components/List"
import axios from "axios";
import { useEffect } from "react";

export default function Photowalks(){
    const [locations,setLocations]= React.useState([]);
    useEffect(() => {
        axios
        .get("/api/photowalk")
        .then((response) => {
                setLocations(response.data);  // Set cp_imagesZZZZ after logging the response
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);



    return(
        <>
            <div className="flex flex-col items-center lg:py-28 md:py-20 sm:py-12 py-7 bg-gray-100">
                {
                    locations.map((item)=>{
                        return(
                        <List  
                            key={item.id}
                            id={item.id}
                            location={item.locations}
                            genre={item.genre}
                            date={item.dates.slice(0,10)}
                            source={`http://localhost:3000${item.cover_img}`}

                        />
                        )
                    })
                }
            </div>
        </>
    )
}   
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Portfolio(){

    const [cp_images,setCp_images]= useState([]);
    const [mono_images,setMono_images]= useState([]);

    useEffect(() => {
        axios
        .get("/api/home")
        .then((response) => {
            
            setCp_images(response.data.cpImages);  // Set cp_imagesZZZZ after logging the response
            setMono_images(response.data.monoImages);  // Set cp_imagesZZZZ after logging the response
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    var cp=[];
    cp_images.map((item) => {
        if (item.aspect_ratio === 'vertical') {
            cp.push(item.image_url);
        }
    });
    var mono=[];
    
    mono_images.map((item) => {
        
            mono.push(item.image_url);
        
    });
    
    return(
    <>
        <div className=" pt-40 py-7 sm:px-8 px-2 md:px-20 flex flex-col items-center bg-gradient-to-b from-black via-gray-400 to-white">
            
            
            <div className=" grid  sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 w-11/12 ">
                <div className=" h-80 relative group bg-black rounded-lg" >
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10 opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>  
                    
                    <img src={`http://localhost:3000${mono[1]}`}className=" object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200 group-hover:brightness-50" alt="1" />
                </div>
                <div className="group h-80 relative bg-black rounded-lg "  >
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10 opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>
                    <img src={`http://localhost:3000${mono[2]}`} className="object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200 object-top group-hover:brightness-50" alt="1" />
                </div>
                <div className="group sm:row-span-2 h-120 relative bg-black rounded-lg" >
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10 opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>
                    <img src={`http://localhost:3000${cp[0]}`} className="object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200  group-hover:brightness-50" alt="1" />
                </div>
                <div className="group  sm:row-span-2 relative bg-black rounded-lg" >
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10     opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>
                    <img src={`http://localhost:3000${cp[2]}`} className="object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200 group-hover:brightness-50" alt="1" />
                </div>
                <div className="group h-80 relative bg-black rounded-lg " >
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10 opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>
                    <img src={`http://localhost:3000${mono[3]}`} className="object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200 group-hover:brightness-50" alt="1" />
                </div>
                <div className="group h-80 relative bg-black rounded-lg  ">
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10 opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>
                    <img src={`http://localhost:3000${mono[4]}`} className="object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200 group-hover:brightness-50" alt="1" />
                </div>
                <div className="group h-80 relative bg-black rounded-lg " >
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10 opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>
                    <img src={`http://localhost:3000${mono[5]}`} className="object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200 group-hover:brightness-50" alt="1" />
                </div>

                <div className="group h-80 relative bg-black rounded-lg ">
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10 opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>
                    <img src={`http://localhost:3000${mono[6]}`}className="object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200 group-hover:brightness-50" alt="1" />
                </div>
                <div className="group h-80 relative bg-black rounded-lg  sm:col-span-2 " >
                    <h4 className="text-white font-display text-xl font-semibold tracking-widest left-1/3 top-2/3 absolute z-10 opacity-0 group-hover:opacity-100 group-hover:top-1/2 duration-200"> KNOWLEDGE </h4>
                    <img src={`http://localhost:3000${cp[0]}`} className="object-cover group-hover:scale-105 w-full h-full rounded-lg group-hover:blur-sm duration-200 group-hover:brightness-50" alt="1" />
                </div>
                
                
            </div>
        </div>

    </>
    )
}
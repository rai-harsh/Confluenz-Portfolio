import React from "react";

export default function Review(props) {
    return (
        <>
        
            <div className="review p-16  rounded-xl shadow-xl text-center group">
                <p>
                <i class="fa-solid fa-quote-left absolute text-4xl text-gray-400 top-2 left-5 group-hover:top-5
                group-hover:left-6 transition-all"></i>
                    {props.review}
                <i class="fa-solid fa-quote-right absolute text-4xl text-gray-400 bottom-32 group-hover:bottom-36  right-5 group-hover:right-6 transition-all "></i>
                </p>
            </div>

            <div className="person flex justify-center mt-8 font-display items-center gap-3">
                <img
                    src={props.img}
                    className="w-20 rounded-full "
                    alt={props.name}
                />
                
                <div className="occupation flex flex-col">
                    <h3 className="font-bold ">{props.name}</h3>
                    <h4 className="text-gray-700">{props.occupation}</h4>
                </div>
            </div>
        </>
    );
}

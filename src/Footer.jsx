import React from "react";
import Portfolio from "./Portfolio";
export default function Footer() {
    var link = ["About", "Portfolio", "Workshops", "Services", "Contact us"];
    var links = link.map((item) => {
        var link = "text-gray-300 font-display transition-transform duration-300 hover:translate-x-2"
        return (
            <a href="" className={link}>
                {item}
            </a>
        )
    })
    var social = ["instagram", "linkedin", "youtube"];
    var socials = social.map((item) => {
        var icon = `fa-brands fa-${item} text-white text-gray-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`
        var link = "text-gray-300 font-display transition-transform duration-300 group-hover:translate-x-2"
        return (
            <div className="flex gap-3 items-center group relative">
                <i className={icon}></i>
                <a href="" className={link}>
                    {item}
                </a>
            </div>
        )
    })
    return (

        <>
            <div className="bg-black py-20 ">
                <div className="  w-3/4 mx-auto gap-10 flex flex-col justify-between sm:flex-row">
                    <div className="flex gap-16 flex-col sm:flex-row">
                        <div className="footer-sec">
                            <h4 className="footer-heading">
                                Quick Links
                            </h4>
                            {links}
                        </div>  

                        <div className="footer-sec ">
                            <h4 className="footer-heading">
                                Socials
                            </h4>
                            {socials}
                        </div>
                    </div>
                    <div className="footer-sec w-full sm:w-1/4 min-w-40">
                        <h4 className="footer-heading">
                            Have a question
                        </h4>
                        <div className="flex items-baseline gap-3  ">
                            <i class="fa-solid fa-location-dot text-white"></i>
                            <p className="text-gray-300"> Dr. Akhilesh Das Gupta Institute of Professional Studies, Zero Pusta Rd, Shastri Park, New Delhi</p>
                        </div>
                        <div className="flex items-center gap-3  ">
                            <i class="fa-solid fa-phone text-white"></i>
                            <p className="text-gray-300"> 9354514584</p>
                        </div>
                        <div className="flex items-center gap-3  ">
                            <i class="fa-solid fa-envelope text-white"></i>
                            <p className="text-gray-300"> harshst0@gmial.com</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

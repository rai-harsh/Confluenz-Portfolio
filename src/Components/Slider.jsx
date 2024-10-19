import React, { useEffect } from "react";

export default function Slider() {
    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = 36 * 4;

    function scrollHandler(element, isLTR, speed) {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

    function setupIntersectionObserver(elements, isLTR, speed) {
        const intersectionCallback = (entries) => {
            const isIntersecting = entries[0].isIntersecting;
            if (isIntersecting) {
                const scrollHandlerBound = () => scrollHandler(entries[0].target, isLTR, speed);
                document.addEventListener('scroll', scrollHandlerBound);
                // Save reference to bound handler for cleanup
                entries[0].target.scrollHandlerBound = scrollHandlerBound;
            } else {
                const scrollHandlerBound = entries[0].target.scrollHandlerBound;
                if (scrollHandlerBound) {
                    document.removeEventListener('scroll', scrollHandlerBound);
                }
            }
        };

        const intersectionObserver = new IntersectionObserver(intersectionCallback);

        // Observe each element individually
        elements.forEach(element => intersectionObserver.observe(element));
    }

    useEffect(() => {
        const line4 = document.querySelectorAll('#line4');
        if (line4.length > 0) {
            console.log(line4); // Verify element is being selected
            setupIntersectionObserver(line4, true, 0.8);
        }

        // Clean up event listener when component unmounts
        return () => {
            line4.forEach(element => {
                const scrollHandlerBound = element.scrollHandlerBound;
                if (scrollHandlerBound) {
                    document.removeEventListener('scroll', scrollHandlerBound);
                }
            });
        };
    }, []); // Empty array ensures this runs once when the component mounts

    return (
        <div id="features-line" className="container mt-0 lg:mt-4">
            <div className="border border-gray-300 rounded-lg overflow-hidden flex justify-center p-4">
                <div id="line4" className="flex gap-8 p-6 transition duration-500">
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Fashion 
                    </h3>
                    <span>•</span>
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Family functions
                    </h3>
                    <span>•</span>
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Portraits
                    </h3>
                    <span>•</span>
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Pre wedding
                    </h3>
                    <span>•</span>
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Conferences
                    </h3>
                    <span>•</span>
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Product Photography
                    </h3>
                    <span>•</span>
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Launch at startup
                    </h3>
                    <span>•</span>
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Offline Support
                    </h3>
                    <span>•</span>
                    <h3 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
                        Good Signing
                    </h3>
                    <span>•</span>
                </div>
            </div>
        </div>
    );
}

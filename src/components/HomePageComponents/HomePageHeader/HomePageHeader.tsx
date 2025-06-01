import React, { useState, useEffect } from 'react';

const images: string[] = [
    './components/HomePageHeader/headerphoto_01.JPG',
    './components/HomePageHeader/headerphoto_02.JPG',
    './components/HomePageHeader/headerphoto_03.JPG',
    './components/HomePageHeader/headerphoto_04.JPG',
    './components/HomePageHeader/headerphoto_05.JPG',
    './components/HomePageHeader/headerphoto_06.JPG',
    './components/HomePageHeader/headerphoto_07.JPG',
    './components/HomePageHeader/headerphoto_08.JPG',
    './components/HomePageHeader/headerphoto_09.JPG',
    './components/HomePageHeader/headerphoto_10.JPG',
    './components/HomePageHeader/headerphoto_11.JPG',
    './components/HomePageHeader/headerphoto_12.JPG',
    './components/HomePageHeader/headerphoto_13.JPG',
    './components/HomePageHeader/headerphoto_14.JPG',
    './components/HomePageHeader/headerphoto_15.JPG',
    './components/HomePageHeader/headerphoto_16.JPG',
    './components/HomePageHeader/headerphoto_17.JPG',
    './components/HomePageHeader/headerphoto_18.JPG',
];

const HomePageHeader = () => {
    const [currentImage, setCurrentImage] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative w-full h-screen flex items-center justify-center bg-[#282c34] text-white overflow-hidden"
        >
            <div
                className="absolute inset-0 w-full h-full"
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`background ${index + 1}`}
                        className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-40' : 'opacity-0'}`}
                    />
                ))}
            </div>

            <div
                className="relative z-10 text-center px-4"
            >
                <h1
                    className="text-4xl md:text-6xl lg:text-[100px] font-bold drop-shadow-md"
                >
                    Hi, I'm <span className="text-[#f09a36]">PEDRO PAJARILLO JR.</span>
                </h1>
                <h3
                    className="mt-4x1 text-sm md:text-base lg:text-lg font-semibold text-[#f09a36] drop-shadow-md"
                >
                    Software Developer | Full-Stack Developer | Coder | 5x Hackathon Winner
                </h3>
            </div>
        </div>
    );
};

export default HomePageHeader;

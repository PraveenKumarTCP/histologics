"use client";
import React, { useState } from 'react';

export default function Hero() {
    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/kap/landingpage/001.webm",
        "https://cdn.clinicalvisuals.com/medical/kap/landingpage/002.webm",
        "https://cdn.clinicalvisuals.com/medical/kap/landingpage/003.webm",
        "https://cdn.clinicalvisuals.com/medical/kap/landingpage/004.webm",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative w-full h-[calc(100vh-81px)] flex justify-center items-end pb-24 overflow-hidden">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
            </div>

            {/* <div className="absolute inset-0 bg-black/60 z-10"></div> */}

            <div className="relative max-w-2xl z-20 container mx-auto px-4 py-12 text-center text-white linear-to-b rounded-3xl from-black/7 to-black/8 backdrop-blur-xl" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-3xl md:text-4xl font-light mb-4 drop-shadow-lg">
                    Saving Lives Worldwide
                </h1>
                <h2 className="text-3xl md:text-4xl font-medium drop-shadow-lg">
                    with Kylon<sup className="text-2xl md:text-3xl">®</sup> Tissue-Based Devices
                </h2>
            </div>
        </section>
    );
}

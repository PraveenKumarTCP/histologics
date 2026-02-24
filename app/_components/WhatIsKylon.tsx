import Image from "next/image";
import Button from "./Button";

export default function WhatIsKylon() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row rounded-[10px] overflow-hidden drop-shadow-sm">
                    {/* Left Text Box */}
                    <div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center bg-[#A43B7F] text-white">
                        <h2 className="text-[28px] md:text-3xl font-medium mb-4">What is Kylon?</h2>
                        <p className="mb-6 text-[15px] font-normal tracking-wide opacity-90">
                            Kylon® — gentle micro-hook fabric for precise debridement and biopsy.
                        </p>
                        <p className="mb-8 text-[15px] leading-[1.8] font-normal opacity-90">
                            Kylon® is a patented medical fabric made of fenestrated loop "micro-hooks" woven
                            into nylon; when lightly pressed and rotated, the hooks flex to engage epithelium,
                            lift tissue by frictional de-bonding, and trap the sample within the fabric. It
                            enables selective, layer-by-layer removal and specimen capture with a minimally
                            invasive, "compassionate" technique used across women's health (e.g.,
                            SoftBiopsy®) and wound care.
                        </p>
                        <div>
                            <Button className="!text-[#A43B7F] bg-white hover:bg-gray-100 normal-case tracking-normal font-medium px-8 py-2.5 rounded shadow-sm border-none" variant="white">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Right Image Box */}
                    <div className="md:w-1/2 bg-[#f4f4f4] flex items-center justify-center p-12 min-h-[300px] md:min-h-full">
                        <div className="relative w-full h-[250px] md:h-full max-w-sm">
                            <Image
                                src="/images/kylon.png"
                                alt="Kylon device close up"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Hero() {
    return (
        <section className="relative w-full h-[calc(100vh-81px)] flex justify-center items-end pb-24 overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://cdn.clinicalvisuals.com/medical/kap/landingpage/002.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* <div className="absolute inset-0 bg-black/60 z-10"></div> */}

            <div className="relative z-20 container mx-auto px-4 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-light mb-4 drop-shadow-lg">
                    Saving Lives Worldwide
                </h1>
                <h2 className="text-3xl md:text-5xl font-medium drop-shadow-lg">
                    with Kylon<sup className="text-2xl md:text-3xl">®</sup> Tissue-Based Devices
                </h2>
            </div>
        </section>
    );
}

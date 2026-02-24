import Image from "next/image";
import homeData from "../_data/homeData.json";

export default function Videos() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-light text-[#00AEEF] mb-4">
                        Trusted by Healthcare Professionals
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Watch our videos and tutorials about handling devices, clinical procedures, and daily operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {homeData.videos.map((video, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48 w-full group cursor-pointer">
                                <Image
                                    src={video.image}
                                    alt={video.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 bg-[#A8327E] rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-semibold text-gray-900 mb-2 min-h-[48px] line-clamp-2">
                                    {video.title}
                                </h3>
                                <p className="text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
                                    {video.author} | {video.date}
                                </p>
                                <div className="mt-auto">
                                    <button className="text-[#A8327E] text-sm font-semibold hover:text-[#8a2765] transition-colors flex items-center gap-1 uppercase tracking-wider">
                                        Watch Video
                                        <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

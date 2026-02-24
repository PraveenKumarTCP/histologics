"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import homeData from "../_data/homeData.json";

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-light text-[#00AEEF] mb-4">
                        Trusted by Healthcare Professionals
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Read what other medical professionals are saying about our devices and services.
                    </p>
                </div>

                <div className="w-full pb-12">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="testimonials-swiper"
                    >
                        {homeData.testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-[300px]">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0">
                                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                                            <p className="text-xs text-gray-500">{testimonial.date}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed flex-grow italic">
                                        <span className="text-[#00AEEF] font-serif text-2xl leading-none">"</span>
                                        {testimonial.text}
                                        <span className="text-[#00AEEF] font-serif text-2xl leading-none px-1">"</span>
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

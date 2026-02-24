import Image from "next/image";
import homeData from "../_data/homeData.json";
import Button from "./Button";

export default function OtherDepartments() {
    return (
        <section className="py-24 bg-[#A8327E]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-light text-white mb-4">
                    Visit Our Other Departments
                </h2>
                <p className="text-white opacity-80 mb-12 max-w-xl mx-auto">
                    Explore our comprehensive range of medical solutions across multiple specialties.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8 mx-auto">
                    {homeData.departments.map((dept, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-xl p-10 flex-1 flex flex-col items-center justify-between transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="relative w-48 h-24 mb-6">
                                <Image
                                    src={dept.logo}
                                    alt="Department Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="font-medium text-gray-800 text-center mb-8 max-w-xs h-12 flex items-center justify-center">
                                {dept.title}
                            </p>
                            <Button href={dept.link} className="w-full sm:w-auto">
                                Visit Website
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

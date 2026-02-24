import Image from "next/image";
import Button from "./Button";

export default function RequestSamples() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden bg-white">
                    {/* Left Text Box */}
                    <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl font-light text-[#00AEEF] mb-6">
                            Request Product Samples
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Try out our high-quality products on a timeline that works for you.
                            Our gratis consignments for establishing a PO evaluation count and unit-to-unit
                            matching (with proper handling), baseline FOA, demonstrated product samples,
                            are all free up to established clinical values in the corresponding clinical pathway area.
                        </p>
                        <div>
                            <Button>
                                Request Samples
                            </Button>
                        </div>
                    </div>

                    {/* Right Image Box */}
                    <div className="md:w-1/2 relative min-h-[400px] bg-gray-50 flex items-center justify-center border-l border-gray-100">
                        <Image
                            src="/images/home/sample.png"
                            alt="Three colorful medical devices"
                            fill
                            className="object-cover drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

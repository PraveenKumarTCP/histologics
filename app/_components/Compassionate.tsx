import Button from "./Button";

export default function Compassionate() {
    return (
        <section className="relative py-32 bg-gray-900 bg-[url('/images/home/colposcopy-bg.png')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                        Compassionate Colposcopy<sup className="text-2xl">®</sup> Devices
                    </h2>
                    <Button variant="white">
                        Request Samples
                    </Button>
                </div>
            </div>
        </section>
    );
}

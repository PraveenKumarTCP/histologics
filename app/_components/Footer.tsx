import Link from "next/link";
import homeData from "../_data/homeData.json";

export default function Footer() {
    const { about, guidelines, resources, contact } = homeData.footer;

    return (
        <footer className="bg-black text-white pt-20 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-[#A8327E] italic inline-block mb-6">
                            <span className="text-blue-500">H</span>ISTOLOGICS
                        </Link>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Search..." className="bg-white text-black px-4 py-2 rounded-sm w-full outline-none text-sm placeholder:italic" />
                            <button className="bg-[#A8327E] w-10 flex items-center justify-center rounded-sm">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-gray-300">About</h4>
                        {about.map((link, idx) => (
                            <Link key={idx} href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-gray-300">Guidelines</h4>
                        {guidelines.map((link, idx) => (
                            <Link key={idx} href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-gray-300">Resources</h4>
                        {resources.map((link, idx) => (
                            <Link key={idx} href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-2 text-gray-300">Contacts</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {contact.phone}
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-400 mt-2">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="whitespace-pre-line leading-relaxed">{contact.address}</span>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#A8327E] transition-colors">
                                <span className="text-white text-xs">YT</span>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#A8327E] transition-colors">
                                <span className="text-white text-xs">FB</span>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#A8327E] transition-colors">
                                <span className="text-white text-xs">IG</span>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#A8327E] transition-colors">
                                <span className="text-white text-xs">IN</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                    <p className="text-xs text-gray-500">
                        ©2024 Copyright @ Histologics LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

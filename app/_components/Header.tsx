import Link from "next/link";
import homeData from "../_data/homeData.json";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#A8327E]">
              <Image src="/images/histologics-logo.png" alt="Histologics" width={100} height={100} />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {homeData.headerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-[#A8327E] px-3 py-2 text-sm font-bold uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Button href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

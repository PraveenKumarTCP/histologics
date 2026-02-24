import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "white";
}

export default function Button({
    children,
    href,
    onClick,
    className = "",
    type = "button",
    variant = "primary",
}: ButtonProps) {
    const baseClasses =
        "inline-block px-6 py-2 rounded-md font-bold transition-colors uppercase text-sm text-center cursor-pointer";

    const variants = {
        primary: "bg-[#A8327E] text-white hover:bg-[#8a2765]",
        secondary: "bg-[#00AEEF] text-white hover:bg-[#008fcc]",
        white: "bg-white text-gray-900 hover:bg-gray-100",
    };

    const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

    if (href) {
        return (
            <Link href={href} className={combinedClasses} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
}

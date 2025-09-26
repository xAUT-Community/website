"use client"; // notwendig für Client-Side Interactivity (z.B. Hamburger Menu)
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-gray-100 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link href="/" className="text-2xl font-bold text-purple-400">

                    xAUT-Community.at
                </Link>
                <Image
                    src="/assets/images/xAUT-LOGO.png"
                    width={64}
                    height={64}
                    alt="this Logo"
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/events" className="hover:text-purple-300 transition">
                        Events
                    </Link>
                    <Link href="/blog" className="hover:text-purple-300 transition">
                        Blog
                    </Link>
                    <Link href="/servers" className="hover:text-purple-300 transition">
                        Server
                    </Link>
                    <Link href="/support" className="hover:text-purple-300 transition">
                        Support
                    </Link>
                    <Button onClick={() => window.open("https://discord.gg/WU3JpwAaAC", "_blank")}>
                        Discord
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-3 bg-gray-800">
                    <Link href="/events" className="block hover:text-purple-300 transition">
                        Events
                    </Link>
                    <Link href="/blog" className="block hover:text-purple-300 transition">
                        Blog
                    </Link>
                    <Link href="/servers" className="block hover:text-purple-300 transition">
                        Server
                    </Link>
                    <Link href="/support" className="block hover:text-purple-300 transition">
                        Support
                    </Link>
                    <Button onClick={() => window.open("https://discord.gg/WU3JpwAaAC", "_blank")}>
                        Discord
                    </Button>
                </div>
            )}
        </nav>
    );
};

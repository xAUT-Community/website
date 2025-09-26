"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { useUser } from "@/context/UserContext";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, logout } = useUser();

    return (
        <nav className="bg-gray-900 text-gray-100 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-purple-400">
                    xAUT-Community.at
                </Link>
                <Image src="/assets/images/xAUT-LOGO.png" width={64} height={64} alt="Logo" />

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/events" className="hover:text-purple-300 transition">Events</Link>
                    <Link href="/blog" className="hover:text-purple-300 transition">Blog</Link>
                    <Link href="/servers" className="hover:text-purple-300 transition">Server</Link>
                    <Link href="/das-team" className="hover:text-purple-300 transition">Das Team</Link>
                    <Link href="/support" className="hover:text-purple-300 transition">Support</Link>
                    <Button onClick={() => window.open("https://discord.gg/WU3JpwAaAC", "_blank")}>Discord</Button>

                    {user ? (
                        <div className="flex items-center space-x-2">
                            <span className="text-white font-medium px-4 py-2">{user.name}</span>
                            <button
                                onClick={logout}
                                className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="bg-gray-700 text-white px-4 py-2 rounded"
                            >
                                Account
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded shadow-lg flex flex-col">
                                    <Link href="/auth/register" className="px-4 py-2 hover:bg-gray-600" onClick={() => setDropdownOpen(false)}>Register</Link>
                                    <Link href="/auth/login" className="px-4 py-2 hover:bg-gray-600" onClick={() => setDropdownOpen(false)}>Login</Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-3 bg-gray-800">
                    <Link href="/events" className="block hover:text-purple-300 transition">Events</Link>
                    <Link href="/blog" className="block hover:text-purple-300 transition">Blog</Link>
                    <Link href="/servers" className="block hover:text-purple-300 transition">Server</Link>
                    <Link href="/das-team" className="block hover:text-purple-300 transition">Das Team</Link>
                    <Link href="/support" className="block hover:text-purple-300 transition">Support</Link>
                    <Button onClick={() => window.open("https://discord.gg/WU3JpwAaAC", "_blank")}>Discord</Button>

                    {user ? (
                        <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">{user.name}</span>
                            <button onClick={logout} className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded">Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link href="/auth/register" className="block px-4 py-2 hover:bg-gray-600 rounded">Register</Link>
                            <Link href="/auth/login" className="block px-4 py-2 hover:bg-gray-600 rounded">Login</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

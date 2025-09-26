import Link from "next/link";
import {DiscordButton} from "@/components/DiscordButton";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 mt-20 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Logo / Name */}
                <div className="text-2xl font-bold text-purple-400">
                    <span className="text-4xl text-purple-900">xAUT</span>-<span className="text-3xl text-purple-800">Community.at</span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-300">
                    <Link href="/events" className="hover:text-purple-400 transition">
                        Events
                    </Link>
                    <Link href="/blog" className="hover:text-purple-400 transition">
                        News
                    </Link>
                    <Link href="/servers" className="hover:text-purple-400 transition">
                        Server
                    </Link>
                    <Link href="/support" className="hover:text-purple-400 transition">
                        Support
                    </Link>
                </div>

                {/* Social / Discord */}
                <div className="flex space-x-4">
                    <DiscordButton />
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-6">
                &copy; {new Date().getFullYear()} xAUT-Community.at. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
};

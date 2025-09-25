"use client";

import {Navbar} from "@/components/Navbar";
import {Button} from "@/components/ui/Button";
import {DiscordButton} from "@/components/DiscordButton";

export default function Home() {
    return (
        <>
            <Navbar />

            <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
                <h1 className="text-5xl font-bold mb-6">
                    Willkommen bei der <span className="text-5xl text-purple-900">xAUT</span>-<span className="text-5xl text-purple-800">Community.at</span>
                </h1>
                <p className="text-lg text-gray-400 mb-6 max-w-xl">
                    Trete unserer Gaming-Community bei! Events, News, Support, Serverstatus & vieles mehr.
                </p>
                <DiscordButton />
            </main>
        </>
    );
}
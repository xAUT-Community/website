"use client";

import { useEffect } from "react";

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("App Error:", error);
    }, [error]);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-6">500</h1>
            <p className="text-gray-300 mb-4">
                Uups, da ist etwas schief gelaufen. Bitte versuche es erneut.
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
                Seite neu laden
            </button>
        </main>
    );
}

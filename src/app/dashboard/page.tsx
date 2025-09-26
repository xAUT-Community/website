"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    name: string | null;
    email: string;
    role: string;
}

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (!stored) router.push("/auth/login");
        else setUser(JSON.parse(stored));
    }, [router]);

    if (!user) return <p className="text-white p-4">Lade...</p>;

    return (
        <div className="min-h-screen bg-gray-900 p-8 text-white">
            <h1 className="text-3xl font-bold mb-6">Mein Dashboard</h1>
            <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
                <p><span className="font-bold">Username:</span> {user.name || "–"}</p>
                <p><span className="font-bold">Email:</span> {user.email}</p>
                <p><span className="font-bold">Rolle:</span> {user.role}</p>
                <button className="mt-4 bg-red-600 hover:bg-red-700 p-2 rounded" onClick={() => { localStorage.removeItem("user"); router.push("/auth/login"); }}>
                    Logout
                </button>
            </div>
        </div>
    );
}

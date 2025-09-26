"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (!res.ok) setError(data.message);
        else {
            // Store User in localStorage/sessionStorage für Session-Simulation
            localStorage.setItem("user", JSON.stringify(data));
            router.push("/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl w-96 flex flex-col gap-4">
                <h1 className="text-2xl text-purple-400 font-bold mb-4">Login</h1>
                {error && <p className="text-red-500">{error}</p>}
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="p-2 rounded bg-gray-700 text-white" />
                <input type="password" placeholder="Passwort" value={password} onChange={e => setPassword(e.target.value)} className="p-2 rounded bg-gray-700 text-white" />
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded mt-2">Login</button>
            </form>
        </div>
    );
}

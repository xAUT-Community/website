"use client";

import { useEffect, useState } from "react";

interface User {
    id: string;
    name: string | null;
    email: string;
    createdAt: string;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="text-white p-4">Lade User...</p>;

    return (
        <div className="p-8 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-6">User CMS</h1>
            <table className="w-full text-left border border-gray-700">
                <thead>
                <tr className="bg-gray-800">
                    <th className="p-2 border-b border-gray-700">Username</th>
                    <th className="p-2 border-b border-gray-700">Email</th>
                    <th className="p-2 border-b border-gray-700">Registriert seit</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-800">
                        <td className="p-2 border-b border-gray-700">{user.name || "–"}</td>
                        <td className="p-2 border-b border-gray-700">{user.email}</td>
                        <td className="p-2 border-b border-gray-700">
                            {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

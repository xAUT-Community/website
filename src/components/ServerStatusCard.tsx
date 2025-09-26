"use client";

import Image from "next/image";

interface ServerCardProps {
    name: string;
    type: "Minecraft" | "Bedrock" | "LS22" | "CSGO" | "ETS2";
    online: boolean;
    players?: { online: number; max: number } | number;
    version?: string; // Minecraft Version oder Map für andere
    icon?: string; // Minecraft Base64 Icon
    map?: string;
}

export const ServerCard: React.FC<ServerCardProps> = ({
                                                          name,
                                                          type,
                                                          online,
                                                          players,
                                                          version,
                                                          icon,
    map,
                                                      }) => {
    return (
        <div
            className={`bg-gray-800 p-4 rounded-xl flex flex-col items-center text-center
        ${online ? "shadow-[0_0_10px_#34D399] animate-pulse-glow" : "shadow-[0_0_10px_#EF4444]"}
        transition-shadow`}
        >
            {/* Icon */}
            {type === "Minecraft" && icon && (
                <Image
                    src={icon}
                    alt={`${name} Icon`}
                    width={80}
                    height={80}
                    className="mb-4 rounded-full"
                />
            )}
            {type !== "Minecraft" && (
                <div className="mb-4 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
                    {type} Server
                </div>
            )}

            {/* Server Name */}
            <h2 className="text-xl font-bold text-purple-400">{name}</h2>

            {/* Online Status */}
            <p className={`mt-2 font-semibold ${online ? "text-green-400" : "text-red-500"}`}>
                {online ? "Online" : "Offline"}
            </p>

            {/* Spielerzahl */}
            {type === "Minecraft" && players && typeof players !== "number" && (
                <p className="text-gray-300">
                    Spieler: {players.online} / {players.max}
                </p>
            )}

            {type !== "Minecraft" && typeof players === "number" && (
                <p className="text-gray-300">Spieler: {players}</p>
            )}

            {/* Version / Map */}
            {version && <p className="text-gray-400">{version}</p>}
            {type === "ETS2" && players && typeof players !== "number" && (
                <p className="text-gray-300">Spieler: {players.online} / {players.max}</p>
            )}

            {type !== "ETS2" && typeof players !== "number" && (
                <p className="text-gray-300">Spieler: {players?.online}</p>
            )}

            {/* Version / Map */}
            {map && <p className="text-gray-400">{map}</p>}
        </div>
    );
};

"use client";

import Image from "next/image";
import { TeamMember } from "@/lib/team";
import { rankStyles } from "@/lib/rankStyles";

interface TeamCardProps {
    member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
    // Falls Rang "[xAUT] Community Freund" -> nur "Community Freund" anzeigen
    const cleanRank = member.rank.replace(/^\[.*?\]\s*/, "");

    // Passende Styles laden
    const rankStyle = rankStyles[cleanRank] || {
        className: "text-gray-400",
    };

    return (
        <div
            className="bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center
                 hover:shadow-[0_0_15px_#8b5cf6] transition"
        >
            <div className="relative w-[120px] h-[120px] mb-4">
                {/* Avatar */}
                <Image
                    src={member.avatar}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full border-2 border-purple-500 object-cover"
                />

                {/* Discord Decoration falls vorhanden */}
                {member.decoration && (
                    <Image
                        src={member.decoration}
                        alt="Decoration"
                        width={120}
                        height={120}
                        className="absolute top-0 left-0 rounded-full pointer-events-none select-none"
                    />
                )}
            </div>

            <h3 className="text-lg font-bold text-purple-400 flex items-center gap-2">
                [{member.clanTag && (
                <span
                    className="text-cyan-400 font-extrabold animate-pulse
                       drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                >
            {member.clanTag}
          </span>
            )}] {member.name}

            </h3>

            {/* Rang */}
            <p className={`text-sm italic mb-2 ${rankStyle.className}`}>
                {cleanRank}
            </p>

            <p className="text-gray-300 text-sm">{member.about}</p>
        </div>
    );
};

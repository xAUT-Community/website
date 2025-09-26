export const rankStyles: Record<
    string,
    { className: string; displayName?: string }
> = {
    Owner: {
        className:
            "text-red-500 font-bold animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]",
    },
    Admin: {
        className:
            "text-red-400 font-bold animate-pulse drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]",
    },
    Moderator: {
        className:
            "text-blue-400 font-bold animate-pulse drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]",
    },
    Supporter: {
        className:
            "text-orange-400 font-bold animate-pulse drop-shadow-[0_0_8px_rgba(251,146,60,0.9)]",
    },
    "Community Freund": {
        className:
            "text-green-400 font-bold drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]",
    },
};

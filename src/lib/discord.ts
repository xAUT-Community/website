// lib/discord.ts
export async function getDiscordServerInfo(serverId: string, token?: string) {
    const url = `https://discord.com/api/v10/guilds/${serverId}?with_counts=true`;
    const res = await fetch(url, {
        headers: token ? { Authorization: `Bot ${token}` } : {},
    });
    if (!res.ok) throw new Error("Failed to fetch Discord server info");
    return res.json();
}

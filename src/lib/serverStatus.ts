// lib/serverStatus.ts
export async function getMinecraftStatus(ip: string) {
    const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
    if (!res.ok) throw new Error("Minecraft server not reachable");
    return res.json();
}

export async function getLS22ServerStatus(ip: string) {
    // Platzhalter: LS22 Server-API müsste durch echten Provider ersetzt werden
    const res = await fetch(`https://example.com/ls22/status?ip=${ip}`);
    if (!res.ok) throw new Error("LS22 server not reachable");
    return res.json();
}

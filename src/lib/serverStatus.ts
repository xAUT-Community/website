// lib/serverStatus.ts
export interface MinecraftStatus {
    online: boolean;
    players: { online: number; max: number };
    version: string;
    icon?: string; // Base64 PNG von der API
}

export interface BedrockStatus {
    online: boolean;
    players: { online: number; max: number };
    version: string;
    icon?: string; // Base64 PNG von der API
}

export interface LS22Status {
    online: boolean;
    players: number;
}

export interface CSGOStatus {
    online: boolean;
    players: number;
    maxPlayers: number;
    map?: string;
}

export interface ETS2Status {
    online: boolean;
    players: number;
    map?: string;
}

// Beispiel: Minecraft Serverstatus
export async function getMinecraftStatus(ip: string): Promise<MinecraftStatus> {
    const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
    const data = await res.json();

    return {
        online: data.online,
        players: data.players || { online: 0, max: 0 },
        version: data.version || "Unbekannt",
        icon: data.icon, // Base64 PNG String
    };
}

export async function getBedrockStatus(ip: string, port: number): Promise<BedrockStatus> {
    const res = await fetch(`https://api.mcsrvstat.us/bedrock/3/${ip}`);
    const data = await res.json();

    return {
        online: data.online,
        players: data.players || { online: 0, max: 0},
        version: data.version || "Unbekannt",
        icon: data.icon,
    };
}

// Beispiel: LS22 Serverstatus (Platzhalter, hier müsstest du echte API verwenden)
export async function getLS22Status(ip: string): Promise<LS22Status> {
    // Dummy Response
    return { online: true, players: Math.floor(Math.random() * 16) };
}

// ---------------------------
// CSGO
// ---------------------------
export async function getCSGOStatus(ip: string, port: number): Promise<CSGOStatus> {
    // Platzhalter: echte API / SteamQuery oder RCON implementieren
    return {
        online: true,
        players: Math.floor(Math.random() * 32),
        maxPlayers: 32,
        map: "de_dust2",
    };
}

// ---------------------------
// ETS2
// ---------------------------
export async function getETS2Status(ip: string, port: number): Promise<ETS2Status> {
    // Platzhalter: ETS2 MP API muss hier rein
    return {
        online: true,
        players: Math.floor(Math.random() * 64),
        map: "Europe Map",
    };
}
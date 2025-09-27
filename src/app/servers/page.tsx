import {getMinecraftStatus, getLS22Status, getETS2Status, getBedrockStatus, getCSGOStatus} from "@/lib/serverStatus";
import {ServerCard} from "@/components/ServerStatusCard";
import {formatPageTitle} from "@/lib/utils";

export const metadata = {
    title: formatPageTitle("Servers"),
    description: "xAUT-Community Servers"
}

export default async function ServersPage() {
    // Beispiel IPs, später anpassen
    const [hypixel, hiveBedrock, lbsg, ets] = await Promise.all([
        getMinecraftStatus("mc.hypixel.net"),
        getBedrockStatus("geo.hivebedrock.network", 19132),
        getBedrockStatus("play.lbsg.net", 19132),
        getETS2Status("ets.server.to", 1),
    ]);

    const jdBros = await getBedrockStatus("play.jdbros.de", 19132);
    const grieferGames = await getMinecraftStatus("GrieferGames.net");

    // 2️⃣ Server nach Typ gruppieren
    const serversByType = {
        Minecraft: [
            {
                name: "Minecraft Server",
                type: "Minecraft" as const,
                online: hypixel.online,
                players: hypixel.players,
                version: hypixel.version,
                icon: hypixel.icon,
            },
        ],
        Bedrock: [
            {
                name: "HiveBedrock",
                type: "Bedrock" as const,
                online: hiveBedrock.online,
                players: hiveBedrock.players,
                version: hiveBedrock.version,
                icon: hiveBedrock.icon,
            },
            {
                name: "LBSG Network",
                type: "Bedrock" as const,
                online: lbsg.online,
                players: lbsg.players,
                version: lbsg.version,
            },
            {
                name: "JDBros",
                type: "Bedrock" as const,
                online: jdBros.online,
                players: jdBros.players,
                version: jdBros.version,
            }
        ],
        ETS2: [
            {
                name: "ETS2 Server",
                type: "ETS2" as const,
                online: ets.online,
                players: ets.players,
                max: ets.max,
            }
        ]
    };

    return (
        <>
        <main className="p-10 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Unsere Server</h1>

            {/* 3️⃣ Durch jeden Typ iterieren */}
            {Object.entries(serversByType).map(([type, servers]) => (
                <section key={type} className="mb-10">
                    <h2 className="text-2xl font-semibold text-purple-400 mb-4">{type} Server</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servers.map((server) => (
                            <ServerCard key={server.name} {...server} />
                        ))}
                    </div>
                </section>
            ))}
        </main>
        </>
    );
}

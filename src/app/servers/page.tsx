import {getMinecraftStatus, getLS22Status, getETS2Status, getBedrockStatus, getCSGOStatus} from "@/lib/serverStatus";
import {Footer} from "@/components/Footer";
import {Navbar} from "@/components/Navbar";
import {ServerCard} from "@/components/ServerStatusCard";

export default async function ServersPage() {
    // Beispiel IPs, später anpassen
    const [mcStatus, hiveBedrock, lbsg, opSucht, opSuchtJava, appleMC] = await Promise.all([
        getMinecraftStatus("mc.hypixel.net"),
        getBedrockStatus("geo.hivebedrock.network", 19132),
        getBedrockStatus("play.lbsg.net", 19132),
        getBedrockStatus("opsucht.net", 19132),
        getMinecraftStatus("opsucht.net"),
        getMinecraftStatus("hub.havoc.games"),
    ]);

    // 2️⃣ Server nach Typ gruppieren
    const serversByType = {
        Minecraft: [
            {
                name: "Minecraft Server",
                type: "Minecraft" as const,
                online: mcStatus.online,
                players: mcStatus.players,
                version: mcStatus.version,
                icon: mcStatus.icon,
            },
            {
                name: "OPSucht.net",
                type: "Minecraft" as const,
                online: opSuchtJava.online,
                players: opSuchtJava.players,
                version: opSuchtJava.version,
                icon: opSuchtJava.icon,
            },
            {
                name: "AppleMC.fun",
                type: "Minecraft" as const,
                online: appleMC.online,
                players: appleMC.players,
                version: appleMC.version,
                icon: appleMC.icon,
            }
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
                name: "OPSucht.net",
                type: "Bedrock" as const,
                online: opSucht.online,
                players: opSucht.players,
                version: opSucht.version,
                icon: opSucht.icon,
            }
        ]
    };

    return (
        <>
            <Navbar />
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
            <Footer />
        </>
    );
}

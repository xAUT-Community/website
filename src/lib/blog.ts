export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    date: string; // ISO String
}

export const exampleBlogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Neues Minecraft Event angekündigt",
        slug: "minecraft-event-oktober",
        content: "Wir starten nächste Woche ein Mega-Build Event...",
        date: "2025-10-05T18:00:00Z",
    },
    {
        id: "2",
        title: "LS22 Coop Farming Event",
        slug: "ls22-coop-farming",
        content: "Schließt euch unserem Farming Server an und arbeitet gemeinsam...",
        date: "2025-10-12T16:00:00Z",
    },
    {
        id: "3",
        title: "Neue Ankündigung",
        slug: "alert",
        content: "🎮 **Hallo, [xAut] Community!** 🎮\n" +
            "@everyone \n" +
            "Willkommen an alle neuen und alten Mitglieder! Hier im **[xAut]** stehen Zusammenhalt, Spaß und fairer Wettbewerb an erster Stelle. Ob Anfänger oder erfahrener Spieler – jeder ist willkommen und findet hier seinen Platz!\n" +
            "\n" +
            "💬 **Unsere Kommunikationskanäle:** Vergesst nicht, regelmäßig bei uns im [Discord] vorbeizuschauen. Hier erfahrt ihr alles über Events, Turniere und könnt euch mit anderen Mitgliedern austauschen!\n" +
            "\n" +
            "📅 **Aktivitäten:** Wöchentliche gemeinsame Spiele, Events und vieles mehr! Seid dabei und bringt euch ein – zusammen macht es am meisten Spaß!\n" +
            "\n" +
            "👍 **Verhaltenskodex:** Respekt und Freundlichkeit sind uns wichtig. Behandelt jeden fair, helft euch gegenseitig und bleibt freundlich!\n" +
            "\n" +
            "Lasst uns zusammen wachsen und besser werden. Auf viele spannende Matches und eine tolle Zeit im [xAut Clan]!\n" +
            "\n" +
            "Euer [xAut] Team",
        date: "2025-10-05T18:00:00Z",
    }
];

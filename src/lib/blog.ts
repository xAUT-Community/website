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
];

// lib/events.ts
export interface Event {
    id: string;
    title: string;
    description: string;
    date: string; // ISO string
    location?: string;
}

export const exampleEvents: Event[] = [
    {
        id: "1",
        title: "Minecraft Build Battle",
        description: "Wir bauen gemeinsam eine Mega-City!",
        date: "2025-10-05T18:00:00Z",
    },
    {
        id: "2",
        title: "LS22 Coop Farming Event",
        description: "Gemeinsam auf dem Server zocken",
        date: "2025-10-12T16:00:00Z",
    },
];

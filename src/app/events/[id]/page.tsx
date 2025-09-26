import { exampleEvents, Event } from "@/lib/events";
import {formatPageTitle} from "@/lib/utils";

interface EventPageProps {
    params: Promise<{ id: string }>;
}

export const metadata = {
    title: formatPageTitle("Event"),
    description: "xAUT-Community Servers"
}

export default async function EventDetailPage({ params }: EventPageProps) {
    const { id } = await params;

    const event: Event | undefined = exampleEvents.find((e) => e.id === id);

    if (!event) {
        return <p className="p-10 text-red-500">Event nicht gefunden</p>;
    }

    return (
        <>
            <main className="p-10 min-h-screen">
                <h1 className="text-4xl font-bold text-purple-400 mb-6">{event.title}</h1>
                <p className="text-gray-300 mb-4">
                    Datum: {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-400">{event.description}</p>

            </main>
        </>
    );
}

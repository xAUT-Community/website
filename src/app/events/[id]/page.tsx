import { exampleEvents, Event } from "@/lib/events";
import {Navbar} from "@/components/Navbar";

interface EventPageProps {
    params: { id: string };
}

export default function EventDetailPage({ params }: EventPageProps) {
    const event: Event | undefined = exampleEvents.find((e) => e.id === params.id);

    if (!event) return <p className="p-10 text-red-500">Event nicht gefunden</p>;

    return (

        <>

        <Navbar />

        <main className="p-10 min-h-screen">
            <h1 className="text-4xl font-bold text-purple-400 mb-4">{event.title}</h1>
            <p className="text-gray-300 mb-2">
                Datum: {new Date(event.date).toLocaleString()}
            </p>
            {event.location && <p className="text-gray-300 mb-4">Ort: {event.location}</p>}
            <p className="text-gray-400">{event.description}</p>
        </main>

        </>
    );
}

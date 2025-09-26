import { exampleEvents, Event } from "@/lib/events";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

interface EventPageProps {
    params: Promise<{ id: string }>;
}

export default async function EventDetailPage({ params }: EventPageProps) {
    const { id } = await params;

    const event: Event | undefined = exampleEvents.find((e) => e.id === id);

    if (!event) {
        return <p className="p-10 text-red-500">Event nicht gefunden</p>;
    }

    return (
        <>
            <Navbar />
            <main className="p-10 min-h-screen">
                <h1 className="text-4xl font-bold text-purple-400 mb-6">{event.title}</h1>
                <p className="text-gray-300 mb-4">
                    Datum: {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-400">{event.description}</p>

            </main>
            <Footer />
        </>
    );
}

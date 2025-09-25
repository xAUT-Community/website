import { exampleEvents } from "@/lib/events";
import {EventCard} from "@/components/EventCard";
import {Navbar} from "@/components/Navbar";

export default function EventsPage() {
    return (
        <>
            <Navbar />

        <main className="p-10 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exampleEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </main>

        </>
    );
}

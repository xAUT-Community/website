import Link from "next/link";
import { Event } from "@/lib/events";

interface EventCardProps {
    event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <Link href={`/events/${event.id}`}>
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <h2 className="text-xl font-bold text-purple-400">{event.title}</h2>
                <p className="text-gray-300">{new Date(event.date).toLocaleString()}</p>
                <p className="mt-2 text-gray-400">{event.description}</p>
            </div>
        </Link>
    );
};

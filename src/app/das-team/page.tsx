import Image from "next/image";
import { teamMembers } from "@/lib/team";
import {Footer} from "@/components/Footer";
import {Navbar} from "@/components/Navbar";
import {TeamCard} from "@/components/TeamCard";

export default function TeamPage() {
    // Team nach Rang gruppieren
    const grouped = teamMembers.reduce<Record<string, typeof teamMembers>>(
        (acc, member) => {
            if (!acc[member.rank]) acc[member.rank] = [];
            acc[member.rank].push(member);
            return acc;
        },
        {}
    );

    return (
        <>

            <Navbar />

            <main className="p-10 min-h-screen">
                <h1 className="text-4xl font-bold text-purple-400 mb-8 text-center">
                    Unser Team
                </h1>

                <div className="space-y-10">
                    {Object.entries(grouped).map(([rank, members]) => (
                        <section
                            key={rank}
                            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-2xl font-semibold text-purple-300 mb-6">
                                {rank}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {members.map((member) => (
                                    <TeamCard key={member.id} member={member} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}

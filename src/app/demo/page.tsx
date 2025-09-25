"use client";

import {Card} from "@/components/ui/Card";
import {Button} from "@/components/ui/Button";
import {DiscordButton} from "@/components/DiscordButton";
import {Navbar} from "@/components/Navbar";


export default function Demo() {
    return (
<>
        <Navbar />
        <div className="p-10 flex flex-col gap-6">
            <Card>
                <h2 className="text-xl font-bold">Event heute</h2>
                <p>Minecraft Build Battle startet um 18:00 Uhr</p>
            </Card>
            <DiscordButton />
        </div>

</>
    );
}

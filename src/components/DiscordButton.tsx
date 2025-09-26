"use client"; // wichtig

import {Button} from "@/components/ui/Button";
import {Navbar} from "@/components/Navbar";

export const DiscordButton = () => {
    return (
        <>


        <Button onClick={() => window.open("https://discord.gg/WU3JpwAaAC", "_blank")}>
            Trete der xAUT bei
        </Button>
        </>

    );
};

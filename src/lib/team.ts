export interface TeamMember {
    id: string;
    name: string;
    avatar: string;
    decoration?: string; // optional für Discord Overlay
    rank: string;
    about?: string;
    clanTag?: string; // Optional
}


export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Killian",
        avatar: "https://cdn.discordapp.com/avatars/924429335211945985/5cf06b0232c084d7d796b2b2e8b0ccfe.webp?size=512",
        decoration: "https://cdn.discordapp.com/avatar-decoration-presets/a_db9baf0ba7cf449d2b027c06309dbe8d?size=512",
        rank: "Owner",
        about: "Gründer der Community, organisiert Events & Server.",
        clanTag: "xAUT"
    },
    {
        id: "2",
        name: "Marcel",
        avatar: "https://cdn.discordapp.com/avatars/1246477385046560892/8ebb249ea6be69f4f77a020cc6a80fcf.webp?size=512",
        decoration: "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/jack_o_lantern.png",
        rank: "Owner",
        clanTag: "xAUT"
    },
    {
      id: "4",
      name: "MadForce22",
      avatar: "https://cdn.discordapp.com/avatars/486195239162478612/4be4b9ddb32d4685aebf08820af47a16.webp?size=512",
      decoration: "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/jack_o_lantern.png",
      rank: "Admin",
      clanTag: "xAUT"
    },
    {
        id: "3",
        name: "Noah",
        avatar: "https://cdn.discordapp.com/avatars/1408739495662190694/6b17c3160bb882182fb78a191c15a396.webp?size=512",
        decoration: "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/cozy_cat.png",
        rank: "[xAUT] Community Freund",
        about: "Hat diese schöne Seite hier entwickelt!",
        clanTag: "xAUT"
    },
    {
        id: "5",
        name: "Jan",
        avatar: "https://cdn.discordapp.com/avatars/1005555166604431482/3247f5a0fdf4a6ea64804ceebaa5e5a9.webp?size=512",
        decoration: "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/jack_o_lantern.png",
        rank: "[xAUT] Community Freund",
        clanTag: "xAUT"
    },
    {
        "id": "6",
        name: "hrobar6",
        avatar: "https://cdn.discordapp.com/avatars/531856659170066444/666dbf73e4e83fcbbc37d82eeb148470.webp?size=512",
        decoration: "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/public/decorations/jack_o_lantern.png",
        rank: "[xAUT] Community Freund"
    }
];

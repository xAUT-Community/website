import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) return NextResponse.json({ message: "Email & Passwort erforderlich" }, { status: 400 });

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return NextResponse.json({ message: "User nicht gefunden" }, { status: 404 });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return NextResponse.json({ message: "Falsches Passwort" }, { status: 401 });

        // Für Start ohne NextAuth: senden wir User info zurück
        return NextResponse.json({ id: user.id, name: user.name, email: user.email, role: user.role });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Serverfehler" }, { status: 500 });
    }
}

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const { name, email, password, passwordConfirm } = await req.json();

        if (!email || !password || !passwordConfirm)
            return NextResponse.json({ message: "Alle Felder ausfüllen" }, { status: 400 });

        if (password !== passwordConfirm)
            return NextResponse.json({ message: "Passwörter stimmen nicht überein" }, { status: 400 });

        if (password.length < 6)
            return NextResponse.json({ message: "Passwort muss mindestens 6 Zeichen haben" }, { status: 400 });

        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing)
            return NextResponse.json({ message: "User existiert bereits" }, { status: 400 });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        return NextResponse.json({ message: "User registriert", userId: user.id }, { status: 201 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Serverfehler", error: err }, { status: 500 });
    }
}

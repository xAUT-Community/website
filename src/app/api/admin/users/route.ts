import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(users, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Fehler beim Laden der User" }, { status: 500 });
    }
}

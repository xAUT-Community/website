import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UserProvider } from "@/context/UserContext";
import {formatPageTitle} from "@/lib/utils";


export const metadata = {
    title: formatPageTitle("Startseite"),
    description: "xAUT-Community Servers"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body className="bg-gray-900 text-white">
        <UserProvider>
            <Navbar />
            {children}
            <Footer />
        </UserProvider>
        </body>
        </html>
    );
}

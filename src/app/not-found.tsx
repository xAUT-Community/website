export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center">
            <h1 className="text-6xl font-bold text-purple-400 mb-6">404</h1>
            <p className="text-gray-300 mb-6">Diese Seite konnte nicht gefunden werden.</p>
            <a
                href="/"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
            >
                Zurück zur Startseite
            </a>
        </main>
    );
}

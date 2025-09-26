import { exampleBlogPosts, BlogPost } from "@/lib/blog";
import {Navbar} from "@/components/Navbar";

interface BlogPageProps {
    params: { slug: string };
}

// 1️⃣ Die Page als async deklarieren
export default async function BlogDetailPage({ params }: BlogPageProps) {
    // 2️⃣ params direkt verwenden (Next.js verlangt async Function)
    const post: BlogPost | undefined = exampleBlogPosts.find(
        (p) => p.slug === params.slug
    );

    if (!post)
        return <p className="p-10 text-red-500">Beitrag nicht gefunden</p>;

    return (
        <>
            <Navbar />
        <main className="p-10 min-h-screen">
            <h1 className="text-4xl font-bold text-purple-400 mb-4">{post.title}</h1>
            <p className="text-gray-300 mb-4">
                Datum: {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-gray-400">{post.content}</p>
        </main>
        </>
    );
}

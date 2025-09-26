import { exampleBlogPosts } from "@/lib/blog";
import {BlogCard} from "@/components/BlogCard";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

export default function BlogPage() {
    return (
        <>
            <Navbar />
        <main className="p-10 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">News & Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exampleBlogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </main>

            <Footer />
        </>
    );
}

import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
    post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <Link href={`/blog/${post.slug}`}>
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer">
                <h2 className="text-xl font-bold text-purple-400">{post.title}</h2>
                <p className="text-gray-300 text-sm">{new Date(post.date).toLocaleDateString()}</p>
            </div>
        </Link>
    );
};

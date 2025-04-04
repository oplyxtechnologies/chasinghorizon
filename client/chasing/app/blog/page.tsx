import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Sidebar } from "@/components/BlogPostCard/Sidebar";
import Image from "next/image";

// Define BlogPost type
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring the Mountains",
    excerpt:
      "Discover the beauty of nature as we take you through the most scenic mountain trails.",
    image: "/blog1.jpg",
    date: "March 28, 2025",
  },
  {
    id: 2,
    title: "City Life Adventures",
    excerpt:
      "A guide to exploring the best urban experiences around the world.",
    image: "/blog2.jpg",
    date: "March 21, 2025",
  },
  {
    id: 3,
    title: "A Guide to Solo Travel",
    excerpt: "Everything you need to know to confidently travel alone.",
    image: "/blog3.jpg",
    date: "March 15, 2025",
  },
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
        Latest Blog Posts
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600} // Add appropriate width
              height={400} // Add appropriate height
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <p className="text-gray-500 text-sm mt-3">{post.date}</p>
              <Link
                href={`/blog/${post.title}`}
                className="text-primary mt-4 flex gap-2 group items-center"
              >
                Read More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-all text-primary"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
}

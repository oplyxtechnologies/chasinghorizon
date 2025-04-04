import { ReactNode } from "react";
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: ReactNode;
  date: string;
  author: string;
  slug: string;
  thumbnail: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring the Mountains",
    excerpt: "Discover the beauty of nature through scenic mountain trails.",
    content: (
      <>
        <p>
          Embark on a comprehensive journey to master front-end development.
          This blog is designed to teach you the essentials of HTML, CSS, and
          JavaScript, ensuring a strong foundation for your web development
          career.
        </p>
        <p>
          By diving into real-world projects, you&apos;ll understand how to
          create interactive and visually appealing web pages. The blog also
          covers the latest trends and tools in front-end development.
        </p>
        <p>
          Explore topics like responsive design, accessibility, and basic
          JavaScript programming to enhance user experience. Yo&apos;ll learn to
          debug and optimize your code using developer tools and gain insights
          into performance optimization.
        </p>
        <p>
          Build a portfolio-ready project by the end of the blog to showcase
          your skills. This workshop is perfect for beginners or anyone looking
          to solidify their front-end development expertise.
        </p>
        <p>
          Explore topics like responsive design, accessibility, and basic
          JavaScript programming to enhance user experience. Yo&apos;ll learn to
          debug and optimize your code using developer tools and gain insights
          into performance optimization.
        </p>
        <p>
          Build a portfolio-ready project by the end of the blog to showcase
          your skills. This workshop is perfect for beginners or anyone looking
          to solidify their front-end development expertise.
        </p>
      </>
    ),
    date: "2024-05-20",
    author: "Rajan Sharma",
    slug: "Exploring the Mountains",
    thumbnail: "/blog2.jpg",
  },
  {
    id: 2,
    title: "Urban Adventures",
    excerpt: "A guide to exploring the best urban experiences worldwide.",
    content:
      "Find the best city spots, restaurants, and nightlife for an unforgettable urban adventure.",
    date: "2024-05-22",
    author: "Amit Patel",
    slug: "urban-adventures",
    thumbnail: "/images/urban.jpg",
  },
  {
    id: 3,
    title: "Solo Travel Tips",
    excerpt: "Everything you need to know for safe and exciting solo travel.",
    content:
      "Solo travel can be exciting and freeing. Learn how to navigate new places and meet amazing people.",
    date: "2024-05-25",
    author: "Sneha Rai",
    slug: "solo-travel-tips",
    thumbnail: "/images/solo-travel.jpg",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {blogPosts.map((post) => (
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            {post.date} | {post.author}
          </p>
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-lg text-gray-700 text-justify">{post.content}</p>
        </div>
      ))}
    </main>
  );
}

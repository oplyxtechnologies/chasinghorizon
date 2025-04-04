export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  slug: string;
  thumbnail: string;
};

// Dummy blog data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring the Mountains",
    excerpt: "Discover the beauty of nature through scenic mountain trails.",
    content:
      "Embark on an adventure to explore the mountains, breathe in the fresh air, and witness breathtaking landscapes.",
    date: "2024-05-20",
    author: "Rajan Sharma",
    slug: "Exploring the Mountains",
    thumbnail: "/images/mountains.jpg",
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

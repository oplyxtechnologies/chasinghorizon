"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    title: "A real sense of community ",
    content:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was…",
    rating: 5,
    name: "Olga",
    location: "Weave Studios – Kai Tak",
    source: "Google",
    image: "/lake-mountain.jpg",
  },
  {
    title: "Fantastic Living Experience",
    content:
      "I love the vibrant community here. The facilities are top-notch, and the support team is always ready to help. It's been a wonderful place to live and work.",
    rating: 5,
    name: "James",
    location: "Weave Studios – Mong Kok",
    source: "Google",
    image: "/cityscape.jpg",
  },
  {
    title: "Feels like home!",
    content:
      "From the moment I moved in, I felt welcomed. The staff goes above and beyond to make sure residents feel comfortable and cared for.",
    rating: 5,
    name: "Sophia",
    location: "Weave Studios – Wan Chai",
    source: "Google",
    image: "/modern-apartment.jpg",
  },
];

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => {
  return (
    <div className="relative min-w-[320px] max-w-sm flex-shrink-0">
      {/* Blue Shadow Effect */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 bg-blue-100 rounded-2xl"></div>

      {/* Card */}
      <div className="relative bg-white shadow-lg rounded-2xl p-6">
        {/* Review Title */}
        <h3 className="text-2xl font-medium">{`“${review.title}”`}</h3>

        {/* Review Description */}
        <p className="text-gray-600 text-sm mt-2">{review.content}</p>

        {/* View More Link */}
        <a href="#" className="text-sm text-gray-900 font-medium mt-2 block">
          View more
        </a>

        {/* Star Ratings */}
        <div className="flex items-center mt-2 text-yellow-400">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i} className="text-lg">
              ★
            </span>
          ))}
        </div>

        {/* Reviewer Info */}
        <div className="mt-4">
          <p className="text-gray-900 font-semibold">{review.name}</p>
          <p className="text-gray-500 text-sm">{review.location}</p>
        </div>

        {/* Source - Google */}
        <div className="flex items-center gap-2 mt-2">
          <Image src="/google.svg" alt="Google" width={20} height={20} />
          <p className="text-gray-500 text-sm">{review.source}</p>
        </div>

        {/* Image at the Bottom */}
        <div className="mt-4 rounded-xl overflow-hidden">
          <Image
            src={review.image}
            alt="Scenic view"
            width={400}
            height={200}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

const ReviewList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const nextIndex = (currentIndex + 1) % reviews.length;
        setCurrentIndex(nextIndex);
        containerRef.current.scrollTo({
          left: nextIndex * 425, // Adjust based on card width + gap
          behavior: "smooth",
        });
      }
    }, 2000); // Scroll every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="flex gap-6 overflow-x-auto px-4 py-6 flex-nowrap scroll-smooth reviews-container touch-pan-x"
    >
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;

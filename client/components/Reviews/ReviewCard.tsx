"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Define the Review type
type Review = {
  title: string;
  description: string;
  rating: number;
  author: string;
  location: string;
  image: string;
  source: string;
};

// Review Card Component
const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="relative min-w-[320px] max-w-sm flex-shrink-0">
      {/* Blue Shadow Effect */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 bg-blue-100 rounded-2xl"></div>

      {/* Card */}
      <div className="relative bg-white shadow-lg rounded-2xl p-6">
        {/* Review Title */}
        <h3 className="text-2xl font-medium">{`“${review.title}”`}</h3>

        {/* Review Description */}
        <p className="text-gray-600 text-sm mt-2">{review.description}</p>

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
          <p className="text-gray-900 font-semibold">{review.author}</p>
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

// ReviewList Component that accepts reviews as props
const ReviewList = ({ reviews }: { reviews: Review[] }) => {
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
  }, [currentIndex, reviews.length]);

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

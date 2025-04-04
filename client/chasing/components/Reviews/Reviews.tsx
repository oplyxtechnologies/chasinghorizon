"use client";
import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewCard"; // Make sure the import is correct

const reviews = [
  {
    title: "A real sense of community, nurtured",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed....",
    rating: 5,
    author: "Olga",
    location: "Weave Studios – Kai Tak",
    image: "/review-image.jpg",
    source: "Google",
  },
  {
    title: "An amazing place to live",
    description:
      "The team here is fantastic! Always responsive and helpful. The community events make it feel like home, and the location is perfect!",
    rating: 4,
    author: "James",
    location: "Weave Studios – Mong Kok",
    image: "/review-image.jpg",
    source: "Google",
  },
  {
    title: "Great experience!",
    description:
      "Highly recommend this place. The staff is excellent, and the amenities are top-notch. A great living experience!",
    rating: 5,
    author: "Sophia",
    location: "Weave Studios – Central",
    image: "/review-image.jpg",
    source: "Google",
  },
];

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Immediately set to visible
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Reviews</h2>
        <button>
          <a
            href="#"
            className="text-sm hover:text-white text-primary border-2 border-primary rounded-sm hover:bg-primary transition-all duration-200 px-4 py-2"
          >
            See All
          </a>
        </button>
      </div>

      {/* Conditionally render based on isVisible state */}
      {isVisible && <ReviewList reviews={reviews} />}
    </div>
  );
};

export default Reviews;

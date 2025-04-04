"use client"; // Only needed for Next.js App Router

import { useState, useEffect } from "react";

const ConstructionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the modal when the component mounts
    setIsOpen(true);
  }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-xs bg-opacity-50 z-50">
        {/* Background Overlay */}
        <div className="absolute inset-0  opacity-50 z-40" />

        {/* Modal */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-md text-center z-50">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            🚧 Website Under Construction 🚧
          </h2>
          <p className="text-gray-600 mt-3">
            We&apos;re working hard to bring you an amazing experience. Stay
            tuned!
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-5 bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition"
          >
            Got It!
          </button>
        </div>

        {/* Disable interaction with the content behind the modal */}
        <div className="absolute inset-0 pointer-events-none" />
      </div>
    )
  );
};

export default ConstructionModal;

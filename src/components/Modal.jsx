import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Modal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images?.length) return null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
      <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl"
        >
          &times;
        </button>

        {/* Image Display */}
        <div className="relative flex justify-center items-center mt-6 object-cover">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full max-h-[500px] object-cover rounded-lg"
          />

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2   bg-gray-400 rounded-full text-xl p-4  transition"
          >
            {" "}
            <FaArrowLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2    bg-gray-400 rounded-full text-xl  p-4 transition"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Image Indicator */}
        <div className="mt-4 flex justify-center space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-gray-900 w-5" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;

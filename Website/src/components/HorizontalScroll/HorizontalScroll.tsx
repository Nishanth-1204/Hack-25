import React, { useEffect, useRef, useState } from "react";
import "./HorizontalScroll.css";

const Horizontalscroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  // Start auto-scroll
  const startAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    autoScrollInterval.current = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 1;
        const scrollWidth = scrollContainerRef.current.scrollWidth / 2;
        if (scrollContainerRef.current.scrollLeft >= scrollWidth) {
          scrollContainerRef.current.scrollLeft = 0;
        }
      }
    }, 10);
  };

  // Stop auto-scroll
  const stopAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // Mouse events for manual scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.pageX);
    setScrollLeft(scrollContainerRef.current?.scrollLeft ?? 0);
    stopAutoScroll();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    const move = e.pageX - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - move;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    startAutoScroll();
  };

  // Touch events for mobile scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX);
    setScrollLeft(scrollContainerRef.current?.scrollLeft ?? 0);
    stopAutoScroll();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const move = e.touches[0].pageX - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - move;
  };

  const handleTouchEnd = () => startAutoScroll();

  // Image list to duplicate for seamless scroll
  const images = [
    "/images/your-image-2.jpg",
    "/images/your-image-3.jpg",
    "/images/your-image-4.jpg",
    "/images/your-image-5.jpg",
    "/images/your-image-6.jpg",
    "/images/your-image-8.jpg",
    "/images/your-image-8.jpg",
    "/images/your-image-9.jpg",
    "/images/your-image-11.jpg",
    "/images/your-image-13.jpg",
  ];

  return (
    <div
      className="scroll-container"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul className="scroll-content">
        {[...images, ...images].map((src, index) => (
          <li key={index} className="scroll-item">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="scroll-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Horizontalscroll;

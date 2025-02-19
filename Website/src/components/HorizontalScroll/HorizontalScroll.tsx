import React, { useEffect, useRef, useState } from "react";
import "./HorizontalScroll.css"; // Import the CSS file for styles

const Horizontalscroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 200; // Amount to scroll per mouse drag or click (in pixels)

  // Handle mouse drag to scroll
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftState, setScrollLeftState] = useState<number>(0);

  // Auto scroll configuration and looping
  const scrollSpeed = 1; // Speed of auto scroll
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          // If the scroll position is at the end, reset to the beginning
          if (
            scrollContainerRef.current.scrollLeft >=
            scrollContainerRef.current.scrollWidth -
              scrollContainerRef.current.clientWidth
          ) {
            scrollContainerRef.current.scrollLeft = 0;
          } else {
            scrollContainerRef.current.scrollLeft += scrollSpeed;
          }
        }
      }, 10); // Adjust this time to control the speed
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current); // Clean up the interval when the component unmounts
      }
    };
  }, []);

  // Handle mouse down event to start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0));
    setScrollLeftState(scrollContainerRef.current?.scrollLeft ?? 0);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  // Handle touch scroll (for mobile devices)
  const [touchStartX, setTouchStartX] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX || !scrollContainerRef.current) return;
    const touchMoveX = e.touches[0].pageX;
    const moveDistance = touchStartX - touchMoveX;
    scrollContainerRef.current.scrollLeft += moveDistance;
    setTouchStartX(touchMoveX); // Update start position
  };

  return (
    <div
      className="scroll-container"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Left Arrow Button for manual scrolling */}
      <button
        className="scroll-btn left"
        onClick={() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= scrollAmount;
          }
        }}
      >
        &#8592;
      </button>

      <ul className="scroll-content">
        {/* List of images */}
        <li>
          <img
            src="./src/assets/images/your-image-9.jpg"
            alt="img-1"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-2.jpg"
            alt="img-2"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-3.jpg"
            alt="img-3"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-4.jpg"
            alt="img-4"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-5.jpg"
            alt="img-5"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-6.jpg"
            alt="img-6"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-8.jpg"
            alt="img-7"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-9.jpg"
            alt="img-8"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-13.jpg"
            alt="img-9"
            className="scroll-image"
          />
        </li>
        <li>
          <img
            src="./src/assets/images/your-image-11.jpg"
            alt="img-10"
            className="scroll-image"
          />
        </li>
        {/* Repeat similar list items for more images */}
      </ul>

      {/* Left Arrow Button for manual scrolling */}
      <button
        className="scroll-btn left"
        onClick={() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= scrollAmount;
          }
        }}
      >
        &#8592;
      </button>
    </div>
  );
};

export default Horizontalscroll;

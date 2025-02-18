import React, { useEffect, useRef } from "react";

const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

const CircleCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const smoothMovement = () => {
      smoothPos.current.x = lerp(
        smoothPos.current.x,
        cursorPos.current.x,
        0.05
      );
      smoothPos.current.y = lerp(
        smoothPos.current.y,
        cursorPos.current.y,
        0.05
      );

      if (cursorRef.current) {
        cursorRef.current.style.left = `${smoothPos.current.x}px`;
        cursorRef.current.style.top = `${smoothPos.current.y}px`;
      }

      requestAnimationFrame(smoothMovement);
    };

    requestAnimationFrame(smoothMovement);
  }, []);

  return (
    window.innerWidth > 600 && (
      <div ref={cursorRef} className="circle-cursor">
        <div className="inner-dot" />
      </div>
    )
  );
};

export default CircleCursor;

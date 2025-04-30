import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

const sections = [
  { color: "#4e54c8", content: "Slide 1" },
  { color: "#8f94fb", content: "Slide 2" },
  { color: "#1cb5e0", content: "Slide 3" },
];

const ScrollSlidesAnime = () => {
  const containerRef = useRef([]);
  const activeIndex = useRef(0);

  const slideIn = (el, direction = "left") => {
    animate(el, {
      duration: 800,
      easing: "easeOutExpo",
      keyframes: [
        {
          opacity: 0,
          translateX: direction === "left" ? "100%" : "-100%",
        },
        {
          opacity: 1,
          translateX: "0%",
        },
      ],
    });
  };

  const slideOut = (el, direction = "left") => {
    animate(el, {
      duration: 800,
      easing: "easeOutExpo",
      keyframes: [
        {
          opacity: 1,
          translateX: "0%",
        },
        {
          opacity: 0,
          translateX: direction === "left" ? "-100%" : "100%",
        },
      ],
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const newIndex = Math.round(scrollY / windowHeight);

      if (newIndex !== activeIndex.current) {
        const currentEl = containerRef.current[activeIndex.current];
        const nextEl = containerRef.current[newIndex];

        // Animate out current and in new
        if (nextEl) slideIn(nextEl, "left");
        if (currentEl) slideOut(currentEl, "left");

        activeIndex.current = newIndex;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ height: `${sections.length * 100}vh` }}>
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => (containerRef.current[i] = el)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            background: section.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem",
            color: "#fff",
            zIndex: sections.length - i,
            opacity: i === 0 ? 1 : 0,
            transform: i === 0 ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {section.content}
        </div>
      ))}
    </div>
  );
};

export default ScrollSlidesAnime;

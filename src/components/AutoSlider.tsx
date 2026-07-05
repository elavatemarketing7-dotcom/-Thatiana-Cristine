import { useEffect, useRef, ReactNode } from "react";

interface AutoSliderProps {
  children: ReactNode;
  interval?: number; // Time in milliseconds between scroll steps
}

export default function AutoSlider({ children, interval = 3000 }: AutoSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let intervalId: NodeJS.Timeout;

    const autoScroll = () => {
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      // If we are at or very near the end, reset back to 0
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Find the width of the first visible child as the scroll increment, defaulting to 280px
        const firstChild = container.children[0] as HTMLElement | undefined;
        const cardWidth = firstChild ? firstChild.getBoundingClientRect().width : 280;
        // Compute gap dynamically, default to 16px (gap-4)
        const gap = 16;
        container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    };

    const startTimer = () => {
      intervalId = setInterval(autoScroll, interval);
    };

    const stopTimer = () => {
      clearInterval(intervalId);
    };

    // Start sliding on mount
    startTimer();

    // Pause auto-scroll when user interacts with the gallery (mouse hover or mobile touch)
    container.addEventListener("mouseenter", stopTimer);
    container.addEventListener("mouseleave", startTimer);
    container.addEventListener("touchstart", stopTimer);
    container.addEventListener("touchend", startTimer);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener("mouseenter", stopTimer);
      container.removeEventListener("mouseleave", startTimer);
      container.removeEventListener("touchstart", stopTimer);
      container.removeEventListener("touchend", startTimer);
    };
  }, [interval]);

  return (
    <div className="relative group/slider w-full overflow-hidden">
      {/* Scrollable Container with custom utility styles to hide scrollbar */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth py-2 px-1 snap-x snap-mandatory scrollbar-none"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </div>
    </div>
  );
}

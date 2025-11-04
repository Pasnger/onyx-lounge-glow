import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeoutId: NodeJS.Timeout;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Debounce visibility changes
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        }, 50);
      },
      { 
        threshold, 
        rootMargin: rootMargin || "50px" // Trigger slightly before entering viewport
      }
    );

    observer.observe(element);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animation variants
export const getRevealClass = (isVisible: boolean, variant: "fade-up" | "fade-scale" | "slide-left" | "slide-right" = "fade-up", delay: number = 0) => {
  const baseTransition = `transition-all duration-1000 ease-out`;
  const delayClass = delay > 0 ? `delay-${delay}` : "";
  
  const variants = {
    "fade-up": isVisible 
      ? "opacity-100 translate-y-0 scale-100" 
      : "opacity-0 translate-y-16 scale-95",
    "fade-scale": isVisible 
      ? "opacity-100 scale-100" 
      : "opacity-0 scale-90",
    "slide-left": isVisible 
      ? "opacity-100 translate-x-0" 
      : "opacity-0 -translate-x-16",
    "slide-right": isVisible 
      ? "opacity-100 translate-x-0" 
      : "opacity-0 translate-x-16",
  };
  
  return `${baseTransition} ${delayClass} ${variants[variant]}`;
};

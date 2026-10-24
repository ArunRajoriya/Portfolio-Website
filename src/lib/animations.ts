import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveal animation for elements on scroll
 */
export const revealOnScroll = (selector: string, delay = 0) => {
  if (typeof window === "undefined") return;

  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

/**
 * Stagger reveal for multiple elements
 */
export const staggerReveal = (selector: string, staggerAmount = 0.1) => {
  if (typeof window === "undefined") return;

  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: staggerAmount,
    ease: "power2.out",
  });
};

/**
 * Parallax effect for background elements
 */
export const parallaxEffect = (selector: string, speed = 0.5) => {
  if (typeof window === "undefined") return;

  gsap.to(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
    ease: "none",
  });
};

/**
 * Scale animation on scroll
 */
export const scaleOnScroll = (selector: string) => {
  if (typeof window === "undefined") return;

  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.4)",
  });
};

/**
 * Magnetic button effect
 */
export const magneticEffect = (element: HTMLElement | null) => {
  if (!element || typeof window === "undefined") return;

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    gsap.to(element, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

/**
 * Smooth scroll initialization
 */
export const initSmoothScroll = () => {
  if (typeof window === "undefined") return;

  // This will be initialized in the component
  return null;
};

/**
 * Text reveal animation (split by words/chars)
 */
export const textReveal = (selector: string, splitBy: "words" | "chars" = "words") => {
  if (typeof window === "undefined") return;

  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const text = element.textContent || "";
    const split = splitBy === "words" ? text.split(" ") : text.split("");

    element.innerHTML = split
      .map(
        (item, i) =>
          `<span style="display: inline-block; opacity: 0;">${item}${splitBy === "words" ? "&nbsp;" : ""}</span>`,
      )
      .join("");

    gsap.to(`${selector} span`, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: splitBy === "words" ? 0.05 : 0.02,
      ease: "power2.out",
    });
  });
};

/**
 * Counter animation
 */
export const animateCounter = (element: HTMLElement, target: number, duration = 2) => {
  if (typeof window === "undefined" || !element) return;

  const obj = { value: 0 };

  gsap.to(obj, {
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toString();
    },
  });
};

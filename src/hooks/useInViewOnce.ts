import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Fires once, the first time the returned ref's element crosses the viewport threshold.
 * Drives a scroll-triggered entrance (see `.reveal` / `.reveal-group` in responsive.css)
 * or a one-shot counter.
 *
 * Under `prefers-reduced-motion`, `inView` is true immediately and the observer never
 * runs — a reveal animation must never become a way to hide content from someone who
 * has asked for less motion.
 */
export function useInViewOnce<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();
  const [observedInView, setObservedInView] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el || observedInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObservedInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [observedInView, reducedMotion, threshold]);

  return { ref, inView: reducedMotion || observedInView };
}

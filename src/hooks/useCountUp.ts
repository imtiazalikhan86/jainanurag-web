import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

const DURATION_MS = 1400;

/**
 * Counts up from 0 to `target` over a fixed duration once `active` turns true (pair with
 * `useInViewOnce`, so a stat counts up the moment it scrolls into view rather than on
 * mount, which most visitors would never see). Jumps straight to `target` under
 * `prefers-reduced-motion`.
 */
export function useCountUp(target: number, active: boolean): number {
  const reducedMotion = useReducedMotion();
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    if (!active || reducedMotion) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - (1 - progress) ** 3;
      setAnimated(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, reducedMotion]);

  if (!active) return 0;
  return reducedMotion ? target : animated;
}

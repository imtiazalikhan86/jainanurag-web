import { useEffect, useState } from 'react';

/**
 * True once the page has scrolled past `threshold`. Used to compact the header, so the
 * hero gets full height on arrival and the nav takes less room afterwards.
 */
export function useScrolled(threshold = 12): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    // Passive: this listener never calls preventDefault, so the browser need not wait for it.
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

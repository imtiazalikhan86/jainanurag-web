import { useEffect, useState } from 'react';

const getMatch = (query: string) =>
  typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

/**
 * Tracks a media query live, rather than reading it once at mount, so resizing the window
 * or changing a system setting takes effect without a reload.
 *
 * Use this when a breakpoint has to change what is *rendered*. When it only changes how
 * something looks, a CSS media query is the better tool — it costs no JavaScript and
 * cannot fall out of step with a re-render.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => getMatch(query));
  const [lastQuery, setLastQuery] = useState(query);

  // Adjusting state during render rather than in an effect: React re-renders immediately
  // with the new value instead of painting one frame with the previous query's answer.
  if (query !== lastQuery) {
    setLastQuery(query);
    setMatches(getMatch(query));
  }

  useEffect(() => {
    const list = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);
    list.addEventListener('change', onChange);
    return () => list.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

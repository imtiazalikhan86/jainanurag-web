import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A client-side route change does not reset scroll the way a document load does. Hash
 * links are left alone so in-page anchors still work.
 */
export function useScrollToTop(): void {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
}

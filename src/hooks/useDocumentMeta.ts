import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  canonical?: string;
}

function setMetaTag(selector: string, attribute: string, value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Per-route title and description without pulling in a head-management library. The
 * homepage values are also hard-coded in index.html so crawlers and social scrapers that
 * do not execute JavaScript still see them.
 */
export function useDocumentMeta({ title, description, canonical }: DocumentMeta): void {
  useEffect(() => {
    document.title = title;
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);

    if (canonical) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, canonical]);
}

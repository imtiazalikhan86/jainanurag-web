import { useCallback, useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'jna-theme';

/*
 * The DOM attribute is the single source of truth, not a React state value.
 *
 * It has to be, because the inline script in index.html sets it before React exists — that
 * is what stops the page flashing white before a dark theme applies. Reading it back
 * through `useSyncExternalStore` means every consumer sees the same value as the stylesheet
 * does, and no component can drift from the attribute that is actually painting the page.
 */
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

/** The server has no DOM and no preference; light is the documented default. */
const getServerSnapshot = (): Theme => 'light';

export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private browsing and blocked storage are not errors worth failing a click over;
    // the theme still applies for this page view.
  }
  emit();
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme]);
  return { theme, toggle };
}

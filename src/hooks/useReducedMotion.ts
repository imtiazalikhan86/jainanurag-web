import { useMediaQuery } from './useMediaQuery';

/**
 * Tracks the user's motion preference live, rather than reading it once at mount, so a
 * change in system settings takes effect without a reload.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

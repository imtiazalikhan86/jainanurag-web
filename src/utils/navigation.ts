/**
 * Which nav entry counts as current.
 *
 * React Router's NavLink decides this from the pathname alone, so on the homepage `/`,
 * `/#industries` and `/#global-business` all matched and three links were marked
 * aria-current at once. Hash entries must compare the hash too, and `/` is only current
 * when there is no hash, otherwise Home stays lit while you are reading a section.
 */
export function isNavItemCurrent(href: string, pathname: string, hash: string): boolean {
  if (href.startsWith('/#')) return pathname === '/' && hash === href.slice(1);
  if (href === '/') return pathname === '/' && hash === '';
  return pathname === href || pathname.startsWith(`${href}/`);
}

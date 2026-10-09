/**
 * A small inline SVG set rather than an icon dependency: only the icons this site uses
 * ship, they inherit currentColor, and there is no extra request or bundle weight.
 */
const PATHS = {
  badge: 'M12 3l2.4 1.8 3-.2.9 2.9 2.4 1.8-1.2 2.7 1.2 2.7-2.4 1.8-.9 2.9-3-.2L12 21l-2.4-1.8-3 .2-.9-2.9L3.3 14.7 4.5 12 3.3 9.3l2.4-1.8.9-2.9 3 .2z M9.5 12l1.8 1.8 3.4-3.6',
  compass: 'M12 21a9 9 0 100-18 9 9 0 000 18z M15.5 8.5l-2 5-5 2 2-5z',
  shield: 'M12 3l7.5 3v5.4c0 4.3-3 8.2-7.5 9.6-4.5-1.4-7.5-5.3-7.5-9.6V6z M9.2 12l1.9 1.9 3.7-3.9',
  globe: 'M12 21a9 9 0 100-18 9 9 0 000 18z M3.6 9h16.8 M3.6 15h16.8 M12 3c2.3 2.4 3.5 5.6 3.5 9s-1.2 6.6-3.5 9c-2.3-2.4-3.5-5.6-3.5-9S9.7 5.4 12 3z',
  lock: 'M6.5 10.5h11a1 1 0 011 1v8a1 1 0 01-1 1h-11a1 1 0 01-1-1v-8a1 1 0 011-1z M8.5 10.5V7.8a3.5 3.5 0 017 0v2.7 M12 15v2',
  building: 'M4 20.5h16 M6 20.5V5a1 1 0 011-1h7a1 1 0 011 1v15.5 M15 20.5V10h3a1 1 0 011 1v9.5 M9 8h3 M9 12h3 M9 16h3',
  receipt: 'M6 3.5h12v17l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4z M9.5 8.5h5 M9.5 12.5h5 M9.5 16h3',
  percent: 'M18 6L6 18 M8.5 6.5a2 2 0 11-4 0 2 2 0 014 0z M19.5 17.5a2 2 0 11-4 0 2 2 0 014 0z',
  ledger: 'M5 4.5h11a3 3 0 013 3v12H8a3 3 0 01-3-3z M5 16.5a3 3 0 013-3h11 M9 8h6',
  bank: 'M3.5 9.5L12 4l8.5 5.5 M5 9.5v8 M9.5 9.5v8 M14.5 9.5v8 M19 9.5v8 M3.5 20.5h17',
  chart: 'M4 20V4 M4 20h16 M8 17v-5 M12.5 17V8 M17 17v-7',
  layers: 'M12 3.5l8.5 4.5-8.5 4.5L3.5 8z M3.5 12.5L12 17l8.5-4.5 M3.5 16.5L12 21l8.5-4.5',
  map: 'M9 4.5L3.5 7v13L9 17.5l6 3 5.5-2.5v-13L15 7.5z M9 4.5v13 M15 7.5v13',
  target: 'M12 21a9 9 0 100-18 9 9 0 000 18z M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  message: 'M20.5 12.5c0 4-3.8 7.2-8.5 7.2a9.9 9.9 0 01-2.8-.4L4.5 21l1.3-3.6A6.9 6.9 0 013.5 12.5c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2z',
  handshake: 'M8 12.5l2.5-2.5 2 2 2-2 3.5 3.5 M3.5 9.5L7 6h4l2 2 2-2h4l3.5 3.5 M20.5 9.5v5l-3 3-3-2.5 M3.5 9.5v5l3 3 3-2.5',
  rocket: 'M13.5 4.5c3.5 1 5.5 4 6 7.5-2 3-5 4.5-8.5 5l-3-3c.5-3.5 2-6.5 5.5-9.5z M9 13l-3.5.5L4 17l3 .5.5 3 3.5-1.5z M15 9.5a1 1 0 11-2 0 1 1 0 012 0z',
  tower: 'M9 20.5V6a1 1 0 011-1h4a1 1 0 011 1v14.5 M5 20.5h14 M11 9h2 M11 13h2 M11 17h2',
  user: 'M12 12.5a4 4 0 100-8 4 4 0 000 8z M4.5 20.5c.8-3.6 3.8-5.5 7.5-5.5s6.7 1.9 7.5 5.5',
  cart: 'M3.5 5h2.2l2 9.5h9.6l2-7H7 M10 19.5a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z M17 19.5a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z',
  code: 'M9 8l-4.5 4L9 16 M15 8l4.5 4L15 16 M13.5 5l-3 14',
  briefcase: 'M4.5 8.5h15a1 1 0 011 1v9a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9a1 1 0 011-1z M9 8.5V6.5a1 1 0 011-1h4a1 1 0 011 1v2 M3.5 13h17',
  exchange: 'M4 9h13l-3-3 M20 15H7l3 3',
  arrowRight: 'M5 12h13 M13 7l5 5-5 5',
  chevronDown: 'M6.5 9.5l5.5 5.5 5.5-5.5',
  chevronRight: 'M9.5 6.5l5.5 5.5-5.5 5.5',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  menu: 'M4 7h16 M4 12h16 M4 17h16',
  close: 'M6 6l12 12 M18 6L6 18',
  phone: 'M8 3.5l2 4-2 1.6a11 11 0 005 5l1.6-2 4 2v3a1.5 1.5 0 01-1.6 1.5C10.6 18.2 5.8 13.4 5 6.1A1.5 1.5 0 016.5 4.5z',
  mail: 'M4 5.5h16a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1v-11a1 1 0 011-1z M3.4 6.3L12 13l8.6-6.7',
  pin: 'M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0012 4.5a6.5 6.5 0 00-6.5 6.3C5.5 15.6 12 21 12 21z M12 13a2.2 2.2 0 100-4.4A2.2 2.2 0 0012 13z',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18z M12 7v5.2l3.2 1.9',
  linkedin: 'M5.5 9.5v9 M5.5 6.2v.1 M10 18.5v-9 M10 13.2c0-2 1.2-3.2 2.9-3.2s2.9 1.2 2.9 3.4v5.1',
} as const;

export type IconName = keyof typeof PATHS;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  /** Icons beside text are decorative; give a label only when the icon carries meaning alone. */
  label?: string;
}

export function Icon({ name, size = 24, className, label }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      focusable="false"
    >
      {PATHS[name].split(' M').map((segment, index) => (
        <path key={index} d={index === 0 ? segment : `M${segment}`} />
      ))}
    </svg>
  );
}

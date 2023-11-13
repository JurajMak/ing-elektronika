export type Navtype = {
  path: string;
  label: string;
  opened?: () => void;
};

export const NAV_PROPS: Navtype[] = [
  { path: '/', label: 'Naslovna' },
  { path: '/usluge', label: 'Usluge' },
  { path: '/kontakt', label: 'Kontakt' },
];

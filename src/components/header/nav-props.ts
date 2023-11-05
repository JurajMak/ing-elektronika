export type Navtype = {
  path: string;
  label: string;
  opened?: () => void;
};

export const NAV_PROPS: Navtype[] = [
  { path: '/', label: 'Naslovnica' },
  { path: '/usluge', label: 'Usluge' },
  { path: '/kontakt', label: 'Kontakt' },
];

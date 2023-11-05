export type Navtype = {
  path: string;
  label: string;
  opened?: () => void;
};

export const NAV_PROPS: Navtype[] = [
  { path: '/', label: 'Naslovnica' },
  { path: '/usluge', label: 'Usluge' },
  { path: '/hobi', label: 'Hobi' },
  { path: '/oprema', label: 'Oprema' },
  { path: '/kontakt', label: 'Kontakt' },
];

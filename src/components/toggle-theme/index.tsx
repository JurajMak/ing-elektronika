'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '../ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme?.includes('light')) {
      return setTheme('dark');
    }
    return setTheme('light');
  };

  return (
    <Button
      variant="ghost"
      onClick={() => changeTheme()}
      className="relative hover:bg-transparent"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] absolute top-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-6 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

{
  /* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */
}

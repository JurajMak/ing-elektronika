'use client';
import React from 'react';
import { NAV_PROPS } from './nav-props';
import { HeaderNavigation } from './navigation';
import { ModeToggle } from '../toggle-theme';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

import dynamic from 'next/dynamic';

const DynamicNavModal = dynamic(() =>
  import('./navigation/modal').then((mod) => mod.NavModal)
);

const Header = () => {
  const [opened, setOpened] = React.useState<boolean>(false);
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex  h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={() => setOpened(true)}
        >
          <Menu />
        </Button>

        <Link href="/">
          <h1 className="text-3xl">Ing-Elektronika</h1>
        </Link>

        <div className="flex items-center justify-end space-x-4 hidden lg:block">
          {NAV_PROPS.map((item) => (
            <HeaderNavigation
              key={item.label}
              path={item.path}
              label={item.label}
              opened={() => setOpened(false)}
            />
          ))}

          <ModeToggle />
        </div>

        {opened && (
          <DynamicNavModal opened={opened} setOpened={() => setOpened(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;

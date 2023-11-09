'use client';
import React from 'react';
import { NAV_PROPS } from './nav-props';
import { HeaderNavigation } from './navigation';
import { ModeToggle } from '../toggle-theme';
import Link from 'next/link';
import { Cable, Menu } from 'lucide-react';
import { Button } from '../ui/button';

import dynamic from 'next/dynamic';

const DynamicNavModal = dynamic(() =>
  import('./navigation/modal').then((mod) => mod.NavModal)
);

const Header = () => {
  const [opened, setOpened] = React.useState<boolean>(false);
  return (
    <header className="backdrop-blur sticky top-0 z-40 w-full border-b">
      <div className="container flex  h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="mx-auto gap-x-24 lg:mx-0 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-6">
              <Cable size={30} />
              <h1 className="text-3xl hidden lg:block">Ing-Elektronika</h1>
            </div>
          </Link>
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setOpened(true)}
          >
            <Menu size={30} />
          </Button>
        </div>

        <div className="flex items-center space-x-4 hidden lg:block">
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

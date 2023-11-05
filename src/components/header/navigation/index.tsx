'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navtype } from '../nav-props';

export function HeaderNavigation({ path, label, opened }: Navtype) {
  const pathname = usePathname();

  return (
    <Button
      asChild
      variant={pathname === path ? 'default' : 'link'}
      onClick={opened}
    >
      <Link href={path}>{label}</Link>
    </Button>
  );
}

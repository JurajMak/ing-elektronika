import { Sheet, SheetContent } from '@/components/ui/sheet';
import { NAV_PROPS } from '../../nav-props';
import { HeaderNavigation } from '..';
import { ModeToggle } from '@/components/toggle-theme';

export function NavModal({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: () => void;
}) {
  return (
    <Sheet open={opened} onOpenChange={setOpened}>
      <SheetContent side="top">
        <div className="flex flex-col  items-center justify-center space-x-0 mx-2">
          {NAV_PROPS.map((item) => (
            <HeaderNavigation
              key={item.label}
              path={item.path}
              label={item.label}
              opened={setOpened}
            />
          ))}

          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}

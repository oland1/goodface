import { Logo } from "@/shared/ui";
import { MobileMenu } from "../../mobile-menu";
import { NotificationBell } from "@/features/notifications-popover";

export const MobileHeader = () => {
  return (
    <header
      className="flex lg:hidden items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <Logo />

      <div className="flex items-center gap-4">
        <NotificationBell />
        <MobileMenu />
      </div>

    </header>
  );
};
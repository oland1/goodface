import { Logo } from "@/shared/ui";
import { NotificationBell } from "@/features/notifications-popover";

export const SidebarHeader = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <Logo />
      <NotificationBell />
    </div>
  );
};
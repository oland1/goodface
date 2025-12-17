import { footerNav, mainNav, NavItem, NavSection, secondaryNav } from "@/entities/navigation";
import { Button } from "@/shared/ui";
import { SidebarHeader } from "@/widgets/sidebar";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="flex bg-white h-screen overflow-y-auto">
      <div className="w-[280px] border-r border-gray-200 flex flex-col">
        <SidebarHeader />

        <div className="flex flex-col p-4 gap-y-4">
          <div className="mb-2">
            <Button label="Buy new proxies" iconName="/plus.svg" iconSize={16} />
          </div>

          <nav className="flex-grow space-y-4 overflow-y-auto">
            <NavItem {...mainNav[0]} />

            {secondaryNav.map((section) => (
              <NavSection key={section.title} title={section.title} items={section.items} />
            ))}
          </nav>

          <hr className="border-gray-200 mt-2.5 mb-2.5" />

          <div className="space-y-1 mb-2">
            {footerNav.map((item) => (
              <NavItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div
          className="flex items-center justify-between pl-4 pt-3 pr-3 pb-3 border-t border-gray-200 hover:bg-gray-100 cursor-pointer transition duration-150 mt-auto h-auto">
          <div className="flex flex-col">
            <span className="text-subtitle2">Henry Smith</span>
            <span className="text-body2">henry.smith@gmail.com</span>
          </div>
          <Image src="/dots-vertical.svg" alt="bell" width={24} height={24} />
        </div>
      </div>
    </aside>
  );
};
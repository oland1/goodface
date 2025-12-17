import { NavItem } from "./NavItem";

type Props = {
  title: string;
  items: Array<{
    title: string;
    iconPath: string;
    isActive?: boolean;
    isLive?: boolean;
    hasArrow?: boolean;
  }>;
  className?: string;
}

export const NavSection = (props: Props) => {
  const { title, items, className = "" } = props;
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold text-gray-700 uppercase px-3">{title}</p>
      <div className={`flex flex-col gap-1 ${className}`}>
        {items.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
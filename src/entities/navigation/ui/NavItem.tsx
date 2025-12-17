import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  iconPath: string;
  isActive?: boolean;
  isLive?: boolean;
  hasArrow?: boolean;
}

export const NavItem = (props: Props) => {
  const {
    title,
    iconPath,
    isActive = false,
    isLive = false,
    hasArrow = false
  } = props;
  
  const activeClasses = isActive
    ? "text-brand-500 bg-brand-50"
    : "text-gray-800 hover:bg-gray-100";

  return (
    <Link href="/"
          className={`flex items-center justify-between pt-1 pr-2 pb-1 pl-3 rounded-sm transition duration-150 ${activeClasses}`}>
      <span className="flex items-center gap-4 text-subtitle2">
         <Image src={iconPath} alt={title} width={20} height={20} />
        {title}
      </span>

      {isLive && (
        <Image src="/live-log.svg" alt="live-log" width={20} height={20} />
      )}
      {hasArrow && (
        <Image src="/chevron-right.svg" alt="Next" width={20} height={20}
               className="text-gray-600" />
      )}
    </Link>
  );
};
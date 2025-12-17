import Image from "next/image";

// Цей компонент має бути частиною Notifications Popover
export const NotificationBell = () => {
  return (
    <div className="relative w-9 h-9 flex items-center justify-center cursor-pointer">
      <Image src="/bell.svg" alt="bell" width={24} height={24} />
      <span
        className="absolute top-0 right-0
          flex items-center justify-center
          text-caption
          bg-brand-400 text-white
          h-4 p-[6px]
          rounded-full border border-white">
          2
        </span>
    </div>
  );
};
"use client";
import { useState } from "react";
import Image from "next/image";
import { Sidebar } from "@/widgets/sidebar";

// Як приклад реалізації, не кінцевий результат
export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="p-2 cursor-pointer">
        <Image src="/menu.svg" alt="Open menu" width={24} height={24} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="relative w-[280px] h-full bg-white shadow-xl animate-in slide-in-from-left duration-300">
            <div className="h-full overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
"use client";
import { useEffect, useId, useRef, useState } from "react";
import { SelectOption } from "./SelectOption";
import Image from "next/image";
import { SelectItem, SelectProps } from "./types";

export const Select = <T extends SelectItem>(props: SelectProps<T>) => {
  const {
    selectedValue,
    options,
    onSelect,
    label
  } = props;
  const selectId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // лише як приклад - має бути більш універсально і не тут реалізовано
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  //

  return (
    <div className="relative flex flex-col gap-2 w-full" ref={dropdownRef}>
      <label className="text-sm text-gray-800" htmlFor={selectId}>{label}</label>

      <div
        id={selectId}
        className="flex items-center w-full bg-white border border-gray-300 rounded-sm py-2.5 px-3 cursor-pointer hover:border-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue?.icon && (
          <Image src={`/${selectedValue.icon}.svg`} alt="" width={20} height={20}
                 className="mr-2" />
        )}
        <span className="text-sm text-gray-900">{selectedValue?.label}</span>

        <div className="ml-auto">
          <Image
            src={`/chevron-${isOpen ? "up" : "down"}.svg`}
            alt="Chevron" width={20} height={20}
            className="transition-transform"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-sm shadow-md max-h-60 overflow-y-auto">
          <ul className="py-1">
            {options.map((option) => (
              <SelectOption
                key={option.id}
                data={option}

                isSelected={option.id === selectedValue?.id}
                onSelect={(val) => {
                  onSelect(val);
                  setIsOpen(false);
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
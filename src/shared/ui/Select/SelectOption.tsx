import Image from "next/image";
import { SelectItem, SelectOptionProps } from "./types";

export const SelectOption = <T extends SelectItem>(props: SelectOptionProps<T>) => {
  const {
    data,
    isSelected,
    onSelect
  } = props;

  return (
    <li
      className={`flex items-center px-3 py-2.5 cursor-pointer transition-colors ${
        isSelected ? "bg-indigo-50 text-indigo-800" : "hover:bg-gray-50 text-gray-900"
      }`}
      onClick={() => onSelect(data)}
    >
      {data.icon && (
        <Image src={`/${data.icon}.svg`} alt="" width={20} height={20} className="mr-2" />
      )}
      <span className="text-sm">{data.label}</span>
    </li>
  );
};
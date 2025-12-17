import React from "react";

type Props = {
  id: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  label: string;
};

export const Radio = (props: Props) => {
  const { id, isSelected, onSelect, label } = props;
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        name="subscription-cycle"
        id={`cycle-${id}`}
        checked={isSelected}
        onChange={() => onSelect(id)}
        className="sr-only"
      />
      <div
        className={`w-3 h-3 rounded-full relative border-1 ${isSelected ? "border-brand-600 bg-brand-600" : "border-gray-300 bg-white"}`}>
        {isSelected && (
          <div
            className="absolute bg-white w-1.5 h-1.5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          </div>
        )}
      </div>

      <label
        htmlFor={`cycle-${id}`}
        className={`text-base font-medium ${isSelected ? "text-brand-800" : "text-gray-800"}`}
      >
        {label}
      </label>
    </div>
  );
};
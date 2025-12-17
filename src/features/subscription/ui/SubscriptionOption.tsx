import React from "react";
import { Badge, Radio } from "@/shared/ui";

type Option = {
  id: string;
  duration: string;
  discount?: string;
};

type Props = {
  cycle: Option;
  isSelected: boolean;
  handleSelect: (id: string) => void;
}

export const SubscriptionOption = ({ cycle, isSelected, handleSelect }: Props) => {
  const classes = "flex items-center p-3 border rounded-sm gap-2 cursor-pointer transition duration-150";

  const selectedClasses = isSelected
    ? "border-brand-500 bg-brand-50"
    : "border-grey-200 hover:border-grey-300 hover:bg-grey-50";

  return (
    <div
      className={`${classes} ${selectedClasses}`}
      onClick={() => handleSelect(cycle.id)}
    >

      <Radio id={cycle.id} isSelected={isSelected} onSelect={handleSelect} label={cycle.duration} />

      {cycle.discount && (
        <Badge value={cycle.discount} />
      )}
    </div>
  );
};
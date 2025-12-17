import React from "react";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

type Props = {
  value: string | number;
  onChange: (value: string) => void;
  onToggle: () => void;
}

// В реалізації має бути враховано
// мін і макс значення для інпуту і валідція введеного значення
export const IPInput = ({ value, onChange, onToggle }: Props) => {
  return (
    <>
      <Input type="number" value={value} onChange={onChange} placeholder="Enter quantity"
             label="Custom quantity" />
      <Button label="Select from the range" onClick={onToggle}
              className="w-max py-1.5 px-4 text-brand-500" />
    </>
  );
};
import React from "react";
import { Button, Range } from "@/shared/ui";

const marks = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

type Props = {
  value: string | number;
  onChange: (value: number) => void;
  onToggle: () => void;
}
export const IPRange = ({ value, onChange, onToggle }: Props) => {
  return (
    <>
      <Range marks={marks} value={Number(value)} min={1} max={1000} step={1} onChange={onChange} />
      <Button label="Enter a custom quantity" iconName="edit.svg" iconSize={16} onClick={onToggle}
              className="w-max py-1.5 px-4 gap-2 text-brand-500" />
    </>
  );
};
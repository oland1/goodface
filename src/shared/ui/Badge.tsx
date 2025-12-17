import React from "react";

type Props = {
  value: string;
};
//Тут можна буде розширити функціонал бейджа, додавши пропси для кольорів, розмірів і т.д.
export const Badge = ({ value }: Props) => {
  return (
    <span
      className="py-0.5 px-1.5 text-xs font-semibold bg-green-50 text-green-800 rounded-sm border border-green-300">
      {value}
    </span>
  );
};
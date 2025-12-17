import React, { useId } from "react";

type Props = {
  type?: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  classes?: string;
}

// Примітивний інпут, який можна буде розширити в майбутньому по аналогії з кнопкою
export const Input = (props: Props) => {
  const { type = "text", value, onChange, placeholder, label, classes } = props;

  const inputId = useId();

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-body1 text-gray-800" htmlFor={inputId}>{label}</label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 border border-gray-300 rounded-sm ${classes} focus:outline-none`}
        placeholder={placeholder}
      />
    </div>
  );
};
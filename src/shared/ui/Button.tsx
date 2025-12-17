import Image from "next/image";
import React from "react";

// типи в окремий файл
type Props = {
  type?: "outline" | "primary";
  size?: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
  iconName?: string;
  iconSize?: number;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
};

//Тут можна буде розширити функціонал кнопки, додавши пропси для кольорів, розмірів і т.д.
//Там де лише іконка без лейбла, можна буде зробити окремий компонент IconButton
export const Button = (props: Props) => {
  const {
    type = "outline",
    size = "sm",
    label,
    iconName,
    iconSize = 16,
    iconPosition = "left",
    onClick,
    className = "",
    disabled = false
  } = props;

  const typeVariants = {
    outline: "bg-white border border-grey-200 text-grey-800 hover:bg-grey-50 active:bg-grey-100",
    primary: "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 border border-transparent"
  };

  const sizeVariants = {
    sm: "text-body2 py-2 px-3",
    md: "text-subtitle2 py-2.5 px-4",
    lg: "text-subtitle1 py-3 px-6"
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center w-full gap-2 
        rounded-lg transition-all duration-150 
        cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        font-semibold
        ${typeVariants[type]} 
        ${sizeVariants[size]} 
        ${className}
      `}
    >
      {iconName && (
        <Image
          src={iconName}
          alt=""
          width={iconSize}
          height={iconSize}
          className={`${iconPosition === "right" ? "order-last" : "order-first"}`}
        />
      )}
      <span>{label}</span>
    </button>
  );
};
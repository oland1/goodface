import React, { useMemo } from "react";
import "./range.css";

type Props = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  marks: number[];
}
// Без адаптації для мобільних пристроїв
export const Range = ({ min, max, step, value, onChange, marks }: Props) => {
  const percentage = useMemo(() => ((value - min) / (max - min)) * 100, [value, min, max]);

  return (
    <div className="w-full pt-16 pb-4">
      <div className="relative w-full h-2">
        <div
          className="absolute -top-12 z-20 pointer-events-none flex flex-col items-center"
          style={{
            left: `calc(${percentage}% + (${12 - percentage * 0.24}px))`,
            transform: "translateX(-50%)",
            willChange: "left"
          }}
        >
          <div
            className="bg-brand-500 text-white text-[14px] font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
            {value} IP
          </div>
          <div
            className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-brand-500 -mt-[1px]" />
        </div>


        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="range-input absolute top-0 left-0 w-full h-2 bg-grey-100 rounded-full appearance-none cursor-pointer z-10 m-0 p-0"
          style={{
            background: `linear-gradient(to right, #5547eb 0%, #5547eb ${percentage}%, #f3f4f6 ${percentage}%, #f3f4f6 100%)`
          }}
        />
      </div>

      <div className="relative mt-4 h-6 w-full">
        {marks.map((mark, index) => {
          const markPos = ((mark - min) / (max - min)) * 100;
          return (
            <span
              key={mark}
              className={`absolute text-[14px] text-grey-500 font-normal whitespace-nowrap transition-all
                ${index === 0 ? "left-0 translate-x-0" :
                index === marks.length - 1 ? "left-full -translate-x-full" :
                  "left-[var(--pos)] -translate-x-1/2"}`}
              style={{ "--pos": `${markPos}%` } as React.CSSProperties}
            >
              {mark}
            </span>
          );
        })}
      </div>

    </div>
  );
};
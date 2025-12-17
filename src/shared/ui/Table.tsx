import React from "react";

type Rows = {
  label: string;
  values: string[];
}

type Props = {
  rows: Rows[];
}

// Реалізовано як приклад таблиці з дизайну. В залежності від варіантів - має сенс переробити на більш гнучку
export const Table = ({ rows }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-sm overflow">

        <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}
              className={`${rowIndex % 2 !== 0 ? "bg-white text-gray-700 text-subtitle2" : "bg-gray-100 text-gray-500 text-body2"}`}>
            <td className="flex text-left align-middle px-3 py-2 ">
              {row.label}
            </td>

            {row.values.map((value, valueIndex) => (
              <td
                key={valueIndex}
                className="px-3 py-2 whitespace-nowrap text-end"
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};
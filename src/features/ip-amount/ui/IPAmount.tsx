import React, { useCallback, useState } from "react";
import { IPRange } from "./IPRange";
import { IPInput } from "./IPInput";


export const IPAmount = () => {
  const [mode, setMode] = useState("slider");
  const [ipCount, setIpCount] = useState<string | number>("100");

  const handleToggle = () => {
    setMode(prev => (prev === "slider" ? "input" : "slider"));
  };

  const handleValueChange = useCallback((newValue: string | number) => {
    setIpCount(newValue);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {mode === "slider" ? (
        <IPRange
          value={ipCount}
          onChange={handleValueChange}
          onToggle={handleToggle}
        />
      ) : (
        <IPInput
          value={ipCount}
          onChange={handleValueChange}
          onToggle={handleToggle}
        />
      )}
    </div>
  );
};
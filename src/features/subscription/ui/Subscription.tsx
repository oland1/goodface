import React, { useCallback, useState } from "react";
import { SubscriptionOption } from "./SubscriptionOption";

const subscriptionOptions = [
  { id: "1m", duration: "1 month", value: 1 },
  { id: "3m", duration: "3 months", value: 3 },
  { id: "12m", duration: "12 months", value: 12, discount: "Save 20%" }
];

// В подальшому варто було б зробити як RadioGroup і більше абстракції. Важливо не дублювати логіку вибору. 
export const Subscription = () => {
  const [selectedCycleId, setSelectedCycleId] = useState<string>("3m");

  const handleSelect = useCallback((id: string) => {
    setSelectedCycleId(id);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-body1 text-gray-800">
        Select subscription cycle
      </h3>

      <div className="flex flex-col gap-2">
        {subscriptionOptions.map((cycle) => (
          <SubscriptionOption
            key={cycle.id}
            cycle={cycle}
            isSelected={selectedCycleId === cycle.id}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};
import React, { useCallback, useState } from "react";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

// Взагалі вся логіка роботи з кодами знижок має бути винесена в окрему фічу і тут лише юзати хук з цієї фічі
// Це стосується і валідації коду і застосування знижки
// Поки що просто базовий інпут з кнопкою

//!! ВАЖЛИВО: такий підхід як в коментарі вище - має бути по всьому проету, а поточна реалізація - тимчасова
export const DiscountInput = () => {
  const [code, setCode] = useState("");

  const handleChange = useCallback((value: string) => {
    setCode(value);
  }, []);

  return (
    <div className="flex gap-2 w-full justify-between mt-3">
      <Input value={code} onChange={handleChange} placeholder="Add discount code"
             classes="py-0 text-body2 text-gray-500" />
      <Button label="Apply" className="w-max" />
    </div>
  );
};
import Image from "next/image";
import React from "react";

// Можливо самий дивний компонент - оскільки поки не зрозуміло яку логіку він буде містити в майбутньому
// Тому поки просто рендеримо іконки платіжних систем
export const Payments = () => {
  return (
    <div className="flex justify-center gap-4 grayscale hover:opacity-100 transition-opacity">
      <Image src="/visa.svg" alt="visa" width={26} height={8} />
      <Image src="/mastercard.svg" alt="mastercard" width={20} height={12} />
      <Image src="/american.svg" alt="american" width={20} height={13} />
      <Image src="/payment.svg" alt="payment" width={19} height={14} />
      <Image src="/unionpay.svg" alt="unionpay" width={23} height={14} />
    </div>
  );
};
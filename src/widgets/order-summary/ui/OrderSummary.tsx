import React from "react";
import { OrderDetails } from "@/widgets/order-summary";
import { Payments } from "@/shared/ui/Payments";
import { Button } from "@/shared/ui/Button";


export const OrderSummary = () => {
  return (
    <div className="flex flex-col gap-4">
      <OrderDetails />
      <Button label="Continue to checkout" type="primary" size="md" />
      <Payments />
    </div>
  );
};
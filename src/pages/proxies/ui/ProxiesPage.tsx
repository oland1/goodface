"use client";
import { DatacenterProxies } from "@/widgets/datacenter-proxies";
import { OrderSummary } from "@/widgets/order-summary";
import { Button } from "@/shared/ui/Button";

// Кнопка Back to all - просто як приклад. Потрібно розуміти більше про навігацію в додатку. Імовірно, її треба буде винести в окремий компонент.
export const ProxiesPage = () => {
  return (
    <div className="flex flex-col px-4 lg:px-12 py-6 gap-6">
      <Button
        label="Back to all"
        iconName="chevron-left.svg"
        iconSize={16}
        className="w-max"
      />

      <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
        <div className="w-full lg:flex-1">
          <DatacenterProxies />
        </div>
        <aside className="w-full lg:w-[380px] lg:sticky lg:top-6">
          <OrderSummary />
        </aside>
      </div>
    </div>
  );
};
export default ProxiesPage;
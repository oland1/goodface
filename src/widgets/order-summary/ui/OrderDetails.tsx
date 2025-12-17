import React from "react";
import { DiscountInput, mockData, mockServices } from "@/widgets/order-summary";
import Image from "next/image";


// В залежності від ситуації - можна розбити на дрібніші компоненти оскільки зараз все в одному файлі і не містить реальної логіки
const renderSummaryRow = (label: string, value: string) => (
  <div className="flex justify-between items-center" key={label}>
    <span className="text-body2 text-gray-600">{label}</span>
    <span className="text-body2 text-gray-800">{value}</span>
  </div>
);

const renderServiceItem = (service: string) => (
  <div className="flex items-center text-gray-600 gap-x-2" key={service}>
    <Image src="/circle-check-filled-green.svg" alt="check" width={20} height={20} />
    {service}
  </div>
);

export const OrderDetails = () => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white p-6 gap-4 flex flex-col">
      <h2 className="text-h5 text-gray-800">Order summary</h2>
      <div className="flex flex-col gap-2">
        <p className="text-subtitle1 text-gray-800">Datacenter Proxies</p>
        {mockServices.map(renderServiceItem)}
      </div>

      <div className="flex flex-col gap-2">
        {mockData.map((item) => (
          renderSummaryRow(item.label, item.value)
        ))}
      </div>

      <DiscountInput />

      <div className="border-t border-gray-200 flex justify-between items-center pt-4">
        <span className="text-subtitle2 text-gray-700">Total</span>
        <span className="text-h4 text-gray-800">$140</span>
      </div>
    </div>
  );
};
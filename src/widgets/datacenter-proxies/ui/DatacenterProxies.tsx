import React from "react";
import { IPAmount } from "@/features/ip-amount";
import { ProxyLocation } from "@/features/proxy-location";
import { BundleOffers } from "@/features/bundle-offers";
import { ProxyInfo } from "@/features/proxy-info";
import { Subscription } from "@/features/subscription";

export const DatacenterProxies = () => {
  return (
    <div className="w-full border border-gray-200 rounded-lg bg-white p-6 gap-6 flex flex-col">
      <ProxyInfo />
      <BundleOffers />
      <IPAmount />
      <Subscription />
      <ProxyLocation />
    </div>
  );
};
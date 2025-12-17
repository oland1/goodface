import React from "react";
import Image from "next/image";

export const ProxyInfo = () => {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2.5 bg-gray-100 rounded-sm flex-shrink-0">
        <Image src="/service-logo.svg" alt="Service Logo" width={35} height={35} />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-gray-800 text-h4">Datacenter Proxies</h2>
        <p className="text-gray-500 text-body2">
          High-speed, reliable proxies sourced from data centers, ideal for managing high-volume,
          concurrent requests.
        </p>
      </div>
    </div>
  );
};
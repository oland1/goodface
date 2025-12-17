import { ProxyBundleTable } from "@/features/proxy-bundle-table";
import React, { useCallback, useState } from "react";
import Image from "next/image";

export const BundleOffers = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpandClick = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-gray-800 text-body1">Select number of IPs</h3>
        <p className="text-gray-500 text-body2">
          Choose the perfect quantity of IPs for your needs effortlessly
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div onClick={handleExpandClick}
             className="flex gap-2 items-center cursor-pointer text-gray-800 text-subtitle2">
          Bundle discounts
          <Image src={`/chevron-${isExpanded ? "down" : "up"}.svg`} alt="chevron" width={16}
                 height={16} />
        </div>

        {isExpanded && <ProxyBundleTable />}
      </div>
    </div>
  );
};
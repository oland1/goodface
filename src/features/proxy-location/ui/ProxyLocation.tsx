import React, { useState } from "react";
import { Select } from "@/shared/ui";

type Location = {
  id: number;
  label: string;
  icon: string;
}

const mockLocations: Location[] = [
  { id: 1, label: "United Kingdom", icon: "uk" },
  { id: 2, label: "United States", icon: "us" },
  { id: 3, label: "Germany", icon: "de" }
];


export const ProxyLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState(mockLocations[0]);
  
  return (
    <Select
      label="Select location"
      selectedValue={selectedLocation}
      options={mockLocations}
      onSelect={setSelectedLocation}
    />
  );
};
import React from "react";
import { Table } from "@/shared/ui/Table";
import { data } from "@/features/proxy-bundle-table";


export const ProxyBundleTable = () => {
  return (
    <Table rows={data} />
  );
};
import Layout from "@/components/Layout";
import React from "react";
import { getAll } from "../util/axiosRequests";
import useSWR from "swr";

function MachineTypes() {
  const { data: response, error } = useSWR("/api/machine-types/", getAll);

  if (error) return "An error has ocurred.";

  return (
    <Layout>
      {!response
        ? "Loading ... "
        : response.data.map((machineType) => {
            return(<div className="" key={machineType._id}>
              <p>{machineType.name}</p>
            </div>);
          })}
    </Layout>
  );
}

export default MachineTypes;

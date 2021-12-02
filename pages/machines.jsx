import Layout from "@/components/Layout";
import MachineSimple from "@/components/machine/MachineSimple";
import React from "react";
import { getAll } from "../util/axiosRequests";
import useSWR from "swr";

function Machines() {
  const { data: response, error } = useSWR("/api/machines/", getAll);

  if (error) return "An error has ocurred.";

  return (
    <Layout>
      {!response
        ? "Loading..."
        : response.data.map((machine) => {
            return <MachineSimple key={machine._id} machine={machine} />;
          })}
    </Layout>
  );
}

export default Machines;

import React from "react";
import Layout from "@/components/Layout";
import useSWR from "swr";
import { getAll } from "../util/axiosRequests";

function Machines() {
  const { data, error } = useSWR("/api/machines/", getAll);
  console.log(data)
  if (error) return "An error has ocurred.";

  if (!data) return "Loading...";

  return <Layout>{data.data.map( machine => {
    return <div className="" key="machine._id">
      <p>{machine.serial}: {machine.machine_type?.name}</p>
      <p>{machine.details}</p>
      <p>{machine.status}</p>
    </div>
  })}</Layout>;
}

export default Machines;

import React from "react";
import Layout from "@/components/Layout";
import { getALl } from "@/axiosRequests";

function Machines() {
  const { data, error } = useSWR("/api/users/", getALl);

  if (error) return "An error has ocurred.";

  if (!data) return "Loading...";

  return <Layout>Machines-types</Layout>;
}

export default Machines;

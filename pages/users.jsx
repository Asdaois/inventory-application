import React from "react";
import useSWR from "swr";
import Layout from "@/components/Layout";
import UserSimple from "@/components/user/UserSimple";
import { getALl } from "@/axiosRequests";


function Users({ users }) {
  const { data, error } = useSWR("/api/users/", getALl);

  if (error) return "An error has ocurred.";

  if (!data) return "Loading...";

  return (
    <Layout>
      {data.map((user) => {
        return <UserSimple user={user} key={user._id} />;
      })}
    </Layout>
  );
}

export default Users;

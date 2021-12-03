import Layout from "@/components/Layout";
import React from "react";
import UserSimple from "@/components/user/UserSimple";
import { getAll } from "@/axiosRequests";
import useSWR from "swr";

function Users() {
  const { data: response, error } = useSWR("/api/users/", getAll);

  if (error) return "An error has ocurred.";
  
  return (
    <Layout>
      {!response
        ? "Loading..."
        : response.data.map((user) => {
            return <UserSimple user={user} key={user._id} />;
          })}
    </Layout>
  );
}

export default Users;

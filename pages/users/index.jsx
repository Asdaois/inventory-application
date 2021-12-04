import Layout from "@/components/Layout";
import React from "react";
import UserSimple from "../../components/user/UserSimple";
import { getAll } from "../../util/axiosRequests";
import useSWR from "swr";

function Users() {
  const { data: response, error } = useSWR("/api/users/", getAll);

  if (error) return <Layout><div className="text-red-600">An error has ocurred!!</div></Layout>;
  
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

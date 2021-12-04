import Layout from "@/components/Layout";
import React from "react";
import Th from "../../components/table/Th";
import UserSimple from "../../components/user/UserSimple";
import { getAll } from "../../util/axiosRequests";
import useSWR from "swr";

function Users() {
  const { data: response, error } = useSWR("/api/users/", getAll);

  if (error)
    return (
      <Layout>
        <div className="text-red-600">An error has ocurred!!</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="">
        <table className="table-auto border-collapse border border-gray-600 min-w-[80%]">
          <thead className="">
            <tr>
              <Th>Company</Th>
              <Th>Name</Th>
              <Th>Phone Number</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </tr>
          </thead>
          <tbody className="">
            {!response
              ? "Loading..."
              : response.data.map((user) => {
                  return <UserSimple user={user} key={user._id} />;
                })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Users;

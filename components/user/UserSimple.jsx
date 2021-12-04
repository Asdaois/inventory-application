import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import React from "react";
import Td from "../table/Td";

function UserSimple({ user }) {
  return (
    <tr>
      <Td>
        <strong>{user.company}</strong>
      </Td>
      <Td>
        {user.first_name} {user.last_name}
      </Td>
      <Td>{user.phone_number}</Td>
      <Td center={true}>
        <EditButton />
      </Td>
      <Td center={true}>
        <DeleteButton />
      </Td>
    </tr>
  );
}

export default UserSimple;

import React from "react";

function UserSimple({ user }) {
  return (
    <div className="">
      <p>
        <strong>{user.company}</strong>
      </p>
      <p>
        {" "}
        {user.first_name} {user.last_name}
      </p>
      <p>Phone number: {user.phone_number}</p>
    </div>
  );
}

export default UserSimple;

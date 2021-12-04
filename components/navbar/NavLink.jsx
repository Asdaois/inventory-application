import Link from "next/link";
import React from "react";

function NavLink({ href, displayName }) {
  return (
    <Link href={href}>
      <button className="capitalize hover:bg-gray-600 hover:text-white p-1">{displayName}</button>
    </Link>
  );
}

export default NavLink;

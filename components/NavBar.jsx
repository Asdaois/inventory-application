import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/rentals">
        <a>Rentals</a>
      </Link>
      <Link href="/machines">
        <a>Machines</a>
      </Link>
      <Link href="/machines-types">
        <a>Machines types</a>
      </Link>
    </nav>
  );
}

export default NavBar;

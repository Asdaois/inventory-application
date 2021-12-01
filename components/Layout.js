import Head from "next/head";
import React from "react";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Inventory Application | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}

export default Layout;

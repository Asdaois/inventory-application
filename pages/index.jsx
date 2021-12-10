import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ message }) {
  return <Layout>{message}</Layout>;
}

export async function getServerSideProps(params) {
  return {
    props: { message: "Enable server?" },
  };
}

export async function getServerSideProps(params) {
  
}
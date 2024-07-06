import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Page from "@/common/components/Page";
import Navbar from "@/common/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page title="Kim Avillanosa">
      <Navbar />
      <h1 className="text-3xl font-bold underline">Kim Avillanosa</h1>
    </Page>
  );
}

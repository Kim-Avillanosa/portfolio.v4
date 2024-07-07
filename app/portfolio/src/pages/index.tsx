import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Page from "@/common/components/Page";
import Navbar from "@/common/components/Navbar";
import { Flex, Text, Button, IconButton } from '@radix-ui/themes';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page title="Kim Avillanosa">
      <Navbar />
      <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes</Text>
      <IconButton>
      </IconButton>
    </Flex>
    </Page>
  );
}

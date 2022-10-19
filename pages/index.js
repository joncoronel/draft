import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState, useCallback } from "react";
import Content from "../components/main/content";

export default function Home(props) {
  const [visible, setVisible] = useState(false);
  const onVisible = useCallback(() => setVisible(true), []);

  const value = props.names;

  return (
    <>
      <Head>
        <title>Advanced Car Creations</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.spacing}>
        <Content />
      </div>
    </>
  );
}

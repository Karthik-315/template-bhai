import Head from "next/head";
import Body from "./components/Body";

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant Landing Page</title>
        <meta name="description" content="Restaurant Landing Page" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body />
    </>
  );
}

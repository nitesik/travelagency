import { HomePageComponent } from "@/features/Home-Page";
import Head from "next/head";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>BhutanUpwardTravels</title>
      </Head>
      <HomePageComponent />
    </main>
  );
}

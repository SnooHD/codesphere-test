import { Header } from "@/components/Header.component";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codesphere workspaces</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div className="w-full max-w-content space-y-xl pt-xl">
        <Header />
        {/* <Table /> */}
      </div>
    </>
  );
}
